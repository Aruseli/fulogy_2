// @flow

import _ from 'lodash';
import { Express } from 'express';
import pckg from '../../../package';
import { IAuthApi } from './interface';

export const initAuthLogout = (path: string, app: Express, api: IAuthApi) => {
  app.get(path, async (req, res) => {
    await api.logout({ req, res, user: req.user });
    res.cookie(pckg.deepcase.auth.cookies.token, '');
    res.cookie(pckg.deepcase.auth.cookies.id, '');
    req.logout();
    const url = _.get(req, `cookies.${pckg.deepcase.auth.cookies.redirect}`);
    res.send({});
  });
};
