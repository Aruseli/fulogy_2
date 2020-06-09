// @flow

import { ClientRequest, ServerResponse } from 'express';

import ApolloClient from 'apollo-client';
import { gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import fetch from 'node-fetch';

const link = createHttpLink({
  uri: 'https://crm.fulogy.com/graphql', 
  fetch: fetch
});

const cache = new InMemoryCache();

const client = new ApolloClient({ 
  link: link,
  cache: cache
});

const INSERT_LEAD = gql`
  mutation InsertLead($name: String!, $phone: String!, $page: String!, $pixelId: String) {
    insertLead(name: $name, phone: $phone, page: $page, pixelId: $pixelId) {
      success
      message
    }
  }
`

export default async (req: ClientRequest, res: ServerResponse) => {
  req.body;
  const response = await client.mutate({
    mutation: INSERT_LEAD, 
    variables: {
      pixelId: '',
      ...req.body,
    }
  })
  // console.log(JSON.stringify({body: req.body, response}, null, 2));
  res.send(response);
};