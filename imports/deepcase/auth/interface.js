// @flow

import _ from 'lodash';
import type { Express, ClientRequest, ServerResponse } from 'express';

export interface IAuthUser {
  id: string;
  token: string;
}

export interface IAuthResult {
  error?: string;
  id?: string;
  token?: string;
}

export interface IAuthApi {
  /** Handle event logout. */
  logout: ({ req: ClientRequest; res: ServerResponse, user: IAuthUser; }) => Promise<void>;
  /** Generate auth based on username and password. */
  local: ({ req: ClientRequest; res: ServerResponse, username: string; password: string; }) => Promise<IAuthResult>;
  /** Generate auth based on googleId. */
  google: ({ accessToken: any; refreshToken: any; profile: any; googleId: string; }) => Promise<IAuthResult>;
  /** Convert token to auth. */
  deserializeToken: (token: string) => Promise<IAuthResult>;
}
