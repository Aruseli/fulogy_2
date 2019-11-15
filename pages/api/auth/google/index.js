// @flow

import _ from 'lodash';

import { initExpress } from '../../../../imports/deepcase/auth/express';

import { initAuthGoogleStrategy, initAuthGoogle } from '../../../../imports/deepcase/auth/google';

import { authApi } from '../../../../imports/project/api/auth';

const app = initExpress(authApi);

initAuthGoogleStrategy(app, authApi);
initAuthGoogle('/api/auth/google', app);

export default app;
