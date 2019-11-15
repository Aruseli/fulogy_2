// @flow

import express from 'express';
import passport from 'passport';

import { initPassportSessions } from './sessions';
import { IAuthApi } from './interface';

export const initExpress = (api: IAuthApi) => {
  const app = express();
  
  app.set('json spaces', 2); // number of spaces for indentation
  app.use(express.json());
  app.use(passport.initialize());
  app.use(passport.session());

  initPassportSessions(passport, api);

  return app;
};