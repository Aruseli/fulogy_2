// @flow

import React, { useContext, useEffect, useState } from 'react';

import ApolloClient from 'apollo-client';

import { useRouter as _useRouter } from 'next/router';
import { getDataFromTree } from '@apollo/react-ssr';
import { parseCookies } from 'nookies'
import { ApolloProvider } from '@apollo/react-hooks';
import { RouterContext } from 'next-server/dist/lib/router-context';

import { generateApolloClient } from '../../project/api/apollo-client.client';
import { AuthProvider, cookieToValue, useAuth } from '../auth/react';

  // $flowignore
const getStorage = () => process.browser ? window : {};

export const generateApolloClientLocal = (options: any, clearCache: boolean = false) => {
  const storage = getStorage();
  const apolloClient = storage.__apolloClient && !clearCache ? storage.__apolloClient : generateApolloClient(options);
  storage.__apolloClient = apolloClient;
  return apolloClient;
};

/**
 * Wrap page for privide apolloClient and build server render based on nextjs async getInitialProps.
 * @param {object} options
 * @param {function} options.Component
 * @param {string=} options.gqlSecret
 * @param {string=} options.gqlPath
 * @returns {function} WrappedComponent
 */
export const wrapSsrGql = ({
  Component: Content, gqlSecret,
}: {
  Component: any; gqlSecret?: string;
}) => {
  const AuthApolloContent = ({
    apolloClient,
    apolloState,
    Content,
  }) => {
    const auth = useAuth();

    const [lastToken, setLastToken] = useState(auth. token);
    const [ac, setAc] = useState(apolloClient);

    useEffect(() => {
      if (lastToken !== auth.token) {
        setLastToken(auth. token);
        setAc(generateApolloClientLocal({
          initialStore: {},
          token: auth.token,
        }, true));
      }
    }, [auth]);

    return <ApolloProvider client={ac}>
      <Content />
    </ApolloProvider>
  };

  const Component = ({
    apolloState, apolloClient, cookies, router,
  }: {
    apolloState: any; apolloClient: ApolloClient; cookies: any; router: any;
  }) => {
    const _router = _useRouter();

    return (
      <RouterContext.Provider value={_router || router}>
        <AuthProvider cookies={cookies}>
          <AuthApolloContent apolloState={apolloState} apolloClient={apolloClient} Content={Content}/>
        </AuthProvider>
      </RouterContext.Provider>
    );
  };

  const Page = ({
    apolloState, cookies, router
  }: {
    apolloState: any; cookies: any; router: any;
  }) => {
    const storage = getStorage();
    const value =  cookieToValue(cookies || {});

    const apolloClient = generateApolloClientLocal({
      initialStore: apolloState,
      token: value.token,
    });

    const container = <Component apolloState={apolloState} apolloClient={apolloClient} cookies={cookies} router={router}/>;
    return container;
  };

  Page.getInitialProps = async props => {
    if (Content.getInitialProps) await Content.getInitialProps(props);

    const cookies = parseCookies(props);
    const value =  cookieToValue(cookies || {});

    const apolloClient = generateApolloClientLocal({
      initialStore: {},
      token: value.token,
    });
    await getDataFromTree(
      <Component apolloState={{}} apolloClient={apolloClient} cookies={cookies} router={{ query: props.query, pathname: props.pathname, asPath: props.asPath }}/>,
    );
    const apolloState: any = apolloClient.extract();
    apolloClient.stop();
    return { apolloState, cookies, router: { query: props.query, pathname: props.pathname, asPath: props.asPath } };
  };

  return Page;
};

export function useRouter() {
  return useContext(RouterContext);
}
