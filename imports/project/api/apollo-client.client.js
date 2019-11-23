// @flow

import _ from 'lodash';
import { generateApolloClient as gac } from '../../deepcase/hasura';

export const generateApolloClient = (options: any) => {
  return gac({
    ...options,
    ssl: !!+process.env.HASURA_GQL_SSL,
    path: process.env.HASURA_GQL_PATH,
  });
};
