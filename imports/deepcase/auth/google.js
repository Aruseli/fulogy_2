// @flow

import _ from 'lodash';
import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { IAuthApi } from './interface';
import pckg from '../../../package';

export const initAuthGoogleStrategy = (app: any, api: IAuthApi) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.AUTH_GOOGLE_CALLBACK,
      },
      async function (accessToken, refreshToken, profile, done) {
        const result = await api.google({
          googleId: profile.id,
          accessToken, refreshToken, profile,
        });
        done(result.error, result);
      }
    )
  );
};

export const initAuthGoogle = (path: string, app: any) => {
  app.get(
    path,
    passport.authenticate(
      'google',
      { scope: 'https://www.googleapis.com/auth/plus.login' },
    ),
  );
};

export const initAuthGoogleCallback = (path: string, app: any) => {
  app.get(
    path, 
    passport.authenticate('google'),
    (req, res) => {
      if (req.user) {
        res.cookie(pckg.deepcase.auth.cookies.token, req.user.token);
        res.cookie(pckg.deepcase.auth.cookies.id, req.user.id);
      }
      const url = _.get(req, pckg.deepcase.auth.cookies.redirect);
      res.redirect(url || '/');
    },
  );
};
