import React, { Fragment } from 'react';
import Link from 'next/link';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import { useAuth0 } from '~/hooks/useAuth0';

const UserPanel = () => {
  const { user } = useAuth0();

  const { data, error, loading } = useQuery(
    gql`
      query USER_PANEL_QUERY($auth0Id: String!) {
        user(where: { auth0_id: { _eq: $auth0Id } }) {
          id
          username
        }
      }
    `,
    {
      variables: {
        auth0Id: user.sub,
      },
    },
  );

  if (loading) return null;

  const hasuraUser = get(data, 'user[0]');

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img
          alt="user"
          className="img-circle elevation-2"
          src="https://loremflickr.com/320/320"
        />
      </div>

      <div className="info">
        <Link href="/users/[:id]" as={`/users/${hasuraUser.id}`}>
          <Fragment>
            <a className="d-block" href={`/users/${hasuraUser.id}`}>
              {hasuraUser.username}
            </a>
          </Fragment>
        </Link>
      </div>

      {/*<button className="btn btn-primary btn-block" onClick={logout}>Logout</button>*/}
    </div>
  );
};

export default UserPanel;
