// @flow

import React from 'react';

import { AnaliticsProvider } from './analitics';
import { wrapSsrGql } from '../deepcase/hasura/ssr';
import { defaultTheme } from './themes/default';

import 'normalize.css';
import ya from 'react-yandex-metrika';
import Cookies from 'js-cookie';
import { ThemeProvider } from '@material-ui/styles';

/**
 * Base app page wrapper. Provide ssr gql and analitics.
 * @param {function} Component
 * @returns {function} WrappedComponent
 */

if (process.browser) {
  window.pixelCookieDomain = 'fulogy.com';
  !function(e,t,n,o,p,a,i,s,c){e[p]||((i=e[p]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)}).queue=[],i.t=1*new Date,(s=t.createElement(n)).async=1,s.src="https://crm.fulogy.com/openpixel.js?t="+864e5*Math.ceil(new Date/864e5),(c=t.getElementsByTagName(n)[0]).parentNode.insertBefore(s,c))}(window,document,"script",0,"opix"),opix("init","ID-_fulogy_"),opix("event","pageload");
  if (process.env.NODE_ENV === 'production') {
    document.addEventListener('yacounter56224693inited', (e) => {
      const uuid = Cookies.get('__opix_uid');
      console.log('in yandex', uuid);
      const yaCounter = window['yaCounter56224693'];
      if (yaCounter) {
        if (uuid) {
          yaCounter.setUserID(uuid);
          yaCounter.userParams({UserID: uuid});
        }
        const clientID = yaCounter.getClientID();
        if (window.opix) window.opix('event', 'addClientID', { value: clientID });
      }
    });
  }
}

export const wrapPage = (Component: any) => {
  return wrapSsrGql({
    // gqlSecret: process.env.GQL_SECRET,
    Component: () => {
      return (
        <AnaliticsProvider
          facebookPixel={process.env.NODE_ENV === 'production' ? '1245714662288364' : null}
          facebookTimeout={process.env.NODE_ENV === 'production' ? 20000 : null}
          googleAnalitics={process.env.NODE_ENV === 'production' ? 'UA-56824740-6' : null}
          yandexMetrika={process.env.NODE_ENV === 'production' ? 56224693 : null}
        >
          <ThemeProvider theme={defaultTheme}>
            <Component />
          </ThemeProvider>
        </AnaliticsProvider>
      );
    },
  });
};
