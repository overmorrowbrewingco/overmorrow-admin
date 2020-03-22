import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';

import Loading from 'components/Loading';
import { useAuth0 } from 'hooks/useAuth0';

const CurrentUserWrapper: React.FC = ({ children }) => {
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

  if (error) throw new Error(error.message);

  return <Fragment>{children}</Fragment>;
};

export default CurrentUserWrapper;
