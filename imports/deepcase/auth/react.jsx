// @flow

import React, { createContext, useCallback, useContext, useState, useEffect } from "react";

import _ from 'lodash';
import Cookies from 'js-cookie';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

import { useRouter } from "next/router";
import useAxios from 'axios-hooks';
import axios from 'axios';

import { IAuthResult } from './interface';

import pckg from '../../../package';

interface IAuthContext {
  token?: string;
  id?: string;
  error?: string;

  isAuthorized: boolean;

  local: ({ username: string; password: string; }) => Promise<IAuthResult>;
  logout: () => Promise<void>;

  loading?: boolean;
}

export const defaultAuthContext = {
  isAuthorized: false,

  local: async ({ username, password }: { username: string; password: string; }) => ({}),
  logout: async () => {},
};

export const defaultUserId = 'anonymous';
export const defaultToken = 'anonymous';

export const cookieToValue = (cookies: any) => ({
  token: cookies[pckg.deepcase.auth.cookies.token] || defaultToken,
  id: cookies[pckg.deepcase.auth.cookies.id] || defaultUserId,
});
export const cookieToAuth = (cookies: any) => ({
  token: cookies[pckg.deepcase.auth.cookies.token],
  id: cookies[pckg.deepcase.auth.cookies.id],
});

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);

export const AuthProvider = ({
  cookies = parseCookies(),
  context = AuthContext,
  children,
}: {
  cookies?: any;
  context?: React$Context<IAuthContext>;
  children: any;
} = {}) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({});
  const [value, setValue] = useState(cookieToValue(cookies));

  const parse = () => {
    const cookies = Cookies.get();
    const newValue = cookieToValue(cookies);
    if (!_.isEqual(newValue, value)) {
      setValue(newValue);
      setAuth(cookieToAuth(cookies));
    }
  };

  useEffect(() => {
    const interval = setInterval(parse, 5000);
    return () => clearInterval(interval);
  }, []);

  const local = async ({ username, password }: { username: string; password: string; }) => {
    setLoading(true);
    const result = await axios.get(`/api/auth/local?username=${username}&password=${password}`);
    if (result.data && !result.data.error && result.data.token && result.data.id) {
      Cookies.set(pckg.deepcase.auth.cookies.token, result.data.token);
      Cookies.set(pckg.deepcase.auth.cookies.id, result.data.id);
      parse();
    }
    setLoading(false);
    return result.data;
  };

  const logout = async () => {
    setLoading(true);
    const result = await axios.get(`/api/auth/logout`);
    if (result.data && !result.data.error) {
      Cookies.set(pckg.deepcase.auth.cookies.token, '');
      Cookies.set(pckg.deepcase.auth.cookies.id, '');
      parse();
    }
    setLoading(false);
    return result.data;
  };

  return <context.Provider value={{
    ...value,
    isAuthorized: auth.token !== defaultToken,
    local,
    logout,
    loading,
  }}>{children}</context.Provider>;
};

export function useAuth({
  context = AuthContext,
}: {
  context: React$Context<IAuthContext>;
} = {}) {
  return useContext(context);
};
