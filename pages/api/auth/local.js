// @flow

import _ from 'lodash';

import { ClientRequest, ServerResponse } from 'express';

import { initAuthLocal } from '../../../imports/deepcase/auth/local';

import { authApi } from '../../../imports/project/api/auth';

export default async (req: ClientRequest, res: ServerResponse) => {
  await initAuthLocal(req, res, authApi);
};