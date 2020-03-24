import React, { Fragment } from 'react';
import { get } from 'lodash';
import { gql } from 'apollo-boost';

import { useQuery } from '@apollo/react-hooks';

import Loading from 'components/Loading';
import { useAuth0 } from 'hooks/useAuth0';

const CurrentUserWrapper: React.FC = ({ children }) => {
  const { user } = useAuth0();

  const auth0Id = get(user, 'sub', undefined);

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
      skip: !auth0Id,
      variables: {
        auth0Id,
      },
    },
  );

  if (auth0Id && loading) return <Loading />;

  if (error) throw new Error(error.message);

  return <Fragment>{children}</Fragment>;
};

export default CurrentUserWrapper;
