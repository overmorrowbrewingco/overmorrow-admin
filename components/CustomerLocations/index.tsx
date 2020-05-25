import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

interface Props {
  id: string;
}

const CustomerLocations: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery(
    gql`
      query CUSTOMER_QUERY($id: uuid!) {
        customer(where: { id: { _eq: $id } }) {
          id

          business {
            account_status
            email
            facebook_username
            instagram_username
            phone_number
            website

            locations_aggregate {
              aggregate {
                count
              }
            }

            locations {
              created_at
              description
              id
              name
              updated_at

              address {
                city
                formatted
              }
            }
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

  if (loading) return null;

  if (error) throw new Error(error.message);

  const customer = get(data, 'customer[0]');

  if (!customer) return <div>NOT FOUND</div>;

  return (
    <div>
      <Row>
        <Col>
          <Table striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {get(customer, 'business.locations', []).map(
                (location, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{location.name}</td>
                    <td>{location.address.city}</td>
                    <td>{location.address.formatted}</td>
                  </tr>
                ),
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerLocations;
