import ApolloClient from 'apollo-client';
import fetch from 'isomorphic-unfetch';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

import { apiSecret, apiUri } from 'config/env';

const createClient = (logout, token, isDevelopment = false) => {
  const httpLink = new HttpLink({
    fetch,
    uri: apiUri,
  });

  const logoutLink = onError(({ graphQLErrors, networkError }) => {
    const authFailureCodes = [
      'jwt-missing-role-claims',
      'jwt-invalid-claims',
      'invalid-jwt',
      'invalid-jwt-key',
    ];

    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, extensions }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${extensions.code}`,
        );
      });

      if (
        graphQLErrors.find(
          ({ extensions }) => authFailureCodes.indexOf(extensions.code) > -1,
        )
      ) {
        logout();
      }
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      logout();
    }
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    if (isDevelopment) {
      operation.setContext({
        headers: {
          'X-Hasura-Admin-Secret': apiSecret,
        },
      });
    } else if (token) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return forward(operation);
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([logoutLink, authMiddleware, httpLink]),
  });

  return client;
};

export default createClient;
