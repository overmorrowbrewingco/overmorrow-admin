import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import Loading from 'components/Loading';

interface Props {
  id: string;
}

const Customer: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery(
    gql`
      query CUSTOMER_QUERY($id: uuid!) {
        customer(where: { id: { _eq: $id } }) {
          created_at
          customer_type
          description
          id
          name
          updated_at

          business {
            account_status
            email
            facebook_username
            id
            instagram_username
            phone_number
            website
          }
        }
      }
    `,
    {
      variables: {
        id,
      },
    },
  );

  if (loading) return <Loading />;

  if (error) throw new Error(error.message);

  const customer = get(data, 'customers[0]');

  return (
    <div>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
};

export default Customer;
