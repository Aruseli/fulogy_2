// @flow

import _ from 'lodash';
import { HttpLink, InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { ApolloLink, concat, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import fetch from 'node-fetch';

interface IOptions {
  initialStore?: any;
  secret?: string | void;
  token?: string | void;
  ssl?: Boolean | void;
  headers?: { [string]: any };
  path?: string | void;
}

export function generateHeaders(options: IOptions) {
  const headers = {
    ...(options.secret
      ? {
          'x-hasura-admin-secret': `${options.secret}`,
        }
      : options.token
      ? {
          Authorization: `Bearer ${options.token}`,
        }
      : {
        Authorization: `Bearer anonymous`,
      }),
    ...options.headers,
  };
  return headers;
};

// TODO token and secret

/**
 * Generate ApolloClient with ssr and subscriptions support.
 * @description
 * By default create anonmous connection.
 * You can provide token for Authorization Bearer or secret for x-hasura-admin-secret headers.
 */
export function generateApolloClient(
  options: IOptions = {},
): ApolloClient {
  const headers = generateHeaders(options);

  const httpLink = new HttpLink({
    uri: `http${options.ssl ? 's' : ''}://${options.path || ''}`,
    fetch,
  });

  // @ts-ignore
  const wsLink = !_.get(process, 'browser')
    ? null
    : new WebSocketLink({
        uri: `ws${options.ssl ? 's' : ''}://${options.path || ''}`,
        options: {
          lazy: true,
          reconnect: true,
          connectionParams: () => ({
            headers,
          }),
        },
      });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers,
    });

    return forward(operation);
  });

  // @ts-ignore
  const link = !_.get(process, 'browser')
    ? httpLink
    : split(
        ({ query }) => true,
        wsLink,
        httpLink,
      );

  return new ApolloClient({
    ssrMode: true,
    link: concat(authMiddleware, link),
    cache: new InMemoryCache({
      freezeResults: false,
      resultCaching: false,
    }).restore(options.initialStore || {}),
  });
}
