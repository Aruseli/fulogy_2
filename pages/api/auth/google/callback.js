// @flow

import _ from 'lodash';

import { initExpress } from '../../../../imports/deepcase/auth/express';
import { apolloClient } from '../../../../imports/project/api/apollo-client.server';

import { initAuthGoogleStrategy, initAuthGoogleCallback } from '../../../../imports/deepcase/auth/google';

import { authApi } from '../../../../imports/project/api/auth';

const app = initExpress(authApi);

initAuthGoogleStrategy(app, apolloClient);
initAuthGoogleCallback('/api/auth/google/callback', app);

export default app;