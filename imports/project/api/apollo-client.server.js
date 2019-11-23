// @flow

import _ from 'lodash';
import { generateApolloClient } from '../../deepcase/hasura';

export const apolloClient = generateApolloClient({
  // $flowignore
  path: process.env.HASURA_GQL_PATH,
  // $flowignore
  secret: process.env.HASURA_GQL_SECRET,
  // $flowignore
  ssl: !!+process.env.HASURA_GQL_SSL,
});
