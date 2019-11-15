// @flow

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import CleanCSS from 'clean-css';
import autoprefixer from "autoprefixer";
import postcss from 'postcss';

import { defaultTheme } from '../imports/project/themes/default';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={defaultTheme.palette.primary.main}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  const css = sheets.toString();
  const _prefixedCss = await postcss([
    autoprefixer({ overrideBrowserslist: ['last 100 version'] }),
  ]).process(css, { from: 'css.css', to: 'prefixedCss.css' });

  let prefixedCss = _prefixedCss.css;
  _prefixedCss.warnings().forEach(warn => {
    prefixedCss = css;
    console.warn(warn.toString());
  });

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        <style id="jss-server-size" dangerouslySetInnerHTML={{ __html: prefixedCss }}/>
      </React.Fragment>,
    ],
  };
};
