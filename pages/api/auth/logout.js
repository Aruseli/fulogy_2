// @flow

import _ from 'lodash';

import { initExpress } from '../../../imports/deepcase/auth/express';

import { initAuthLogout } from '../../../imports/deepcase/auth/logout';

import { authApi } from '../../../imports/project/api/auth';

const app = initExpress(authApi);

initAuthLogout('/api/auth/logout', app, authApi);

export default app;