import React from 'react';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';

import Loading from '~/components/Loading';
import { useAuth0 } from '~/hooks/useAuth0';

const CurrentUserWrapper = ({ auth0Id, children }) => {
  const { user } = useAuth0();

  const { error, loading } = useQuery(
    gql`
      query CURRENT_USER_QUERY($auth0Id: String!) {
        user(where: { auth0_id: { _eq: $auth0Id } }) {
          id
          family_name
          given_name
          username
        }
      }
    `,
    {
      pollInterval: 30000,
      variables: {
        auth0Id: user.sub,
      },
    },
  );

  if (loading) return <Loading />;

  if (error) throw new Error(error);

  return children;
};

export default CurrentUserWrapper;
