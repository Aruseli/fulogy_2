// @flow

import React from 'react';

// import { AnaliticsProvider } from './packages/analitics';
import { wrapSsrGql } from '../deepcase/hasura/ssr';
import { defaultTheme } from './themes/default';

import 'normalize.css';
import { ThemeProvider } from '@material-ui/styles';
import { AuthProvider } from '../deepcase/auth/react';

/**
 * Base app page wrapper. Provide ssr gql and analitics.
 * @param {function} Component
 * @returns {function} WrappedComponent
 */

export const wrapPage = (Component: any) => {
  return wrapSsrGql({
    // gqlSecret: process.env.GQL_SECRET,
    Component: () => {
      return (
        <ThemeProvider theme={defaultTheme}>
          <Component />
        </ThemeProvider>
      );
    },
  });
};
