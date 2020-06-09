import _ from 'lodash';
import React, { useEffect, createContext, useState } from 'react';
import { useRouter } from 'next/router';

import ReactPixel from 'react-facebook-pixel';
import ya, { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';

export const Context = createContext({});

/**
 *
 * @param {object} props
 * @param {number=} props.facebookPixel
 * @param {number=} props.facebookTimeout
 * @param {string=} props.googleAnalitics
 * @param {number=} props.yandexMetrika
 * @param {*=} props.children
 * @param {ReactContext=} props.context
 */
export const AnaliticsProvider = ({
  facebookPixel = null,
  facebookTimeout = 0,
  googleAnalitics = null,
  yandexMetrika = null,
  context = Context,
  children,
}) => {
  const router = useRouter();
  const pathname = router ? router.pathname : null;
  const [facebookReady, setFacebookReady] = useState(false);

  const content = (
    <context.Provider
      value={{
        facebookPixel,
        googleAnalitics,
        yandexMetrika,
        trigger: (action, data) => {
          try {
            if (googleAnalitics)
              ReactGA.event({
                category: 'actions',
                action,
                value: data ? data.value : undefined,
              });
            if (yandexMetrika) ya('reachGoal', action, data);
            if (facebookPixel && facebookReady) ReactPixel.trackCustom(action, data);
          } catch (error) {
            console.error(error);
          }
        },
      }}
    >
      {children}
    </context.Provider>
  );

  useEffect(() => {
    if (!process.browser || !pathname) return;
    
    setTimeout(() => {
      setFacebookReady(true);
      if (facebookPixel) {
        const facebookPixelAdvancedMatching = {
          
        };
        ReactPixel.init(facebookPixel, facebookPixelAdvancedMatching, {
          autoConfig: true,
          debug: true,
        });
        ReactPixel.pageView();
      }
    }, facebookTimeout); 

    if (googleAnalitics) {
      ReactGA.initialize(googleAnalitics, {
        gaOptions: {
          
        },
      });
    }
  }, []);

  useEffect(() => {
    if (!process.browser || !pathname) return;

    if (facebookPixel && facebookReady) ReactPixel.pageView();
    if (googleAnalitics) {
      ReactGA.set({ page: pathname });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return (
    <>
      {content}
      {(!!yandexMetrika && !!pathname) && <YMInitializer
        accounts={[yandexMetrika]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
          triggerEvent: true,
        }}
        version="2"
      />}
    </>
  );
};
