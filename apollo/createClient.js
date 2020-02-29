import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import { apiUri } from '~/config/env';

const createClient = (token) => {
  const client = new ApolloClient({
    fetch,
    uri: apiUri,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return client;
};

export default createClient;
