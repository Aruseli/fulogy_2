// @flow

import { IAuthUser, IAuthApi, IAuthResult } from '../../deepcase/auth/interface';

import { apolloClient } from './apollo-client.server';

export const authApi: IAuthApi = {
  logout: async ({ req, res, user }) => console.log('auth.logout', user),
  local: async ({ req, res, username, password }) => {
    console.log('auth.local', { username, password });
    if (username !== 'a') return { error: '!username' };
    if (password !== 'a') return { error: '!password' };
    return { id: 'anonymous', token: 'anonymous' };
  },
  google: async ({ accessToken, refreshToken, profile, googleId }) => {
    console.log('auth.google', { accessToken, refreshToken, profile, googleId });
    return { error: 'broken' };
  },
  deserializeToken: async (token) => ({ error: 'broken' }),
};
