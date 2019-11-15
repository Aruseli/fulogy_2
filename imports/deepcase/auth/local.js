// @flow

import _ from 'lodash';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ClientRequest, ServerResponse } from 'express';

import { IAuthApi } from './interface';

export const initAuthLocal = async (req: ClientRequest, res: ServerResponse, api: IAuthApi) => {
  const username = _.get(req, 'query.username');
  const password = _.get(req, 'query.password');

  res.send(await api.local({ req, res, username, password }));
};