// @flow

import { Passport } from 'passport';
import { IAuthApi } from './interface';

export const initPassportSessions = (passport: Passport, api: IAuthApi) => {
  passport.serializeUser((auth, done) => {
    done(null, auth.token);
  });
  passport.deserializeUser(async (token, done) => {
    const result = await api.deserializeToken(token);
    return result && (result.id || result.token || result.error) ? result : { error: 'broken' };
  });
};