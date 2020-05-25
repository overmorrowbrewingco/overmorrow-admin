import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import AccountStatusBadge from 'components/UI/AccountStatusBadge';
import ContactList from 'components/ContactList';
import Loading from 'components/Loading';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/UI/AdminLTE';

interface Props {
  id: string;
}

const Customer: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useQuery(
    gql`
      query CUSTOMER_QUERY($id: uuid!) {
        customer(where: { id: { _eq: $id } }) {
          created_at
          updated_at
          customer_type
          id
          description
          name

          business {
            account_status
            email
            facebook_username
            id
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
              }
            }

            contacts {
              id
              full_name
              primary
              title
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

  if (loading) return <Loading />;

  if (error) throw new Error(error.message);

  const customer = get(data, 'customer[0]');

  if (!customer) return null;

  return (
    <div>
      <Row>
        <Col xs="7">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col>
                  <dl>
                    <dt>Business Name</dt>
                    <dd>{customer.name}</dd>
                  </dl>
                </Col>

                <Col>
                  <dl>
                    <dt>Account Status</dt>
                    <dd>
                      <AccountStatusBadge
                        status={customer.business.account_status}
                      />
                    </dd>
                  </dl>
                </Col>
              </Row>

              <Row>
                <Col>
                  <dl>
                    <dt>Description</dt>
                    <dd>
                      {customer.description ? (
                        customer.description
                      ) : (
                        <small className="text-muted">
                          <em>None.</em>
                        </small>
                      )}
                    </dd>
                  </dl>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Contact Information</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col>
                  <dl>
                    <dt>Website</dt>
                    <dd>
                      {customer.business.website ? (
                        <a
                          href={customer.business.website}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {customer.business.website}
                        </a>
                      ) : (
                        <small className="text-muted">
                          <em>None.</em>
                        </small>
                      )}
                    </dd>
                  </dl>
                </Col>

                <Col>
                  <dl>
                    <dt>Phone Number</dt>
                    <dd>
                      {customer.business.phone_number ? (
                        <a
                          href={`tel:${customer.business.phone_number}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {customer.business.phone_number}
                        </a>
                      ) : (
                        <small className="text-muted">
                          <em>None.</em>
                        </small>
                      )}
                    </dd>
                  </dl>
                </Col>
              </Row>

              <Row>
                <Col>
                  <dl>
                    <dt>Email</dt>
                    <dd>
                      {customer.business.email ? (
                        <a
                          href={`mailto:${customer.business.email}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {customer.business.email}
                        </a>
                      ) : (
                        <small className="text-muted">
                          <em>None.</em>
                        </small>
                      )}
                    </dd>
                  </dl>
                </Col>

                <Col>
                  <dl>
                    <dt>Facebook Username</dt>
                    <dd>
                      {customer.business.facebook_username ? (
                        <a
                          href={`https://www.facebook.com/${customer.business.facebook_username}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {customer.business.facebook_username}
                        </a>
                      ) : (
                        <small className="text-muted">
                          <em>None.</em>
                        </small>
                      )}
                    </dd>
                  </dl>
                </Col>
              </Row>

              <Row>
                <Col>
                  <dl>
                    <dt>Instagram Username</dt>
                    <dd>
                      {customer.business.instagram_username ? (
                        <a
                          href={`https://www.instagram.com/${customer.business.instagram_username}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {customer.business.instagram_username}
                        </a>
                      ) : (
                        <small className="text-muted">
                          <em>None.</em>
                        </small>
                      )}
                    </dd>
                  </dl>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardHeader className="align-items-center d-flex justify-content-between">
              <CardTitle className="flex-grow-1">Locations</CardTitle>

              <Link
                as={`/customers/${customer.id}/locations`}
                href="/customers/[id]/locations"
              >
                <a className="btn btn-primary btn-xs">See All</a>
              </Link>
            </CardHeader>

            <CardBody>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>City</th>
                  </tr>
                </thead>

                <tbody>
                  {customer.business.locations.map((location, i) => (
                    <tr key={location.id}>
                      <td>{i + 1}</td>
                      <td>{location.name}</td>
                      <td>{location.address.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>

            {/*
              <CardFooter className="text-right">
                <Link
                  as={`/customers/${customer.id}/locations/new`}
                  href="/customers/[id]/locations/new"
                >
                  <a className="btn btn-secondary">Create New</a>
                </Link>
                <Link
                  as={`/customers/${customer.id}/locations`}
                  href="/customers/[id]/locations"
                >
                  <a className="btn btn-primary ml-2">See All</a>
                </Link>
              </CardFooter>
            */}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex-grow-1">Contacts</CardTitle>
            </CardHeader>

            <CardBody>
              <ContactList businessId={customer.business.id} limit={3} />
            </CardBody>

            {/*
              <CardFooter className="text-right">
                <Link
                  as={`/customers/${customer.id}/contacts/new`}
                  href="/customers/[id]/contacts/new"
                >
                  <a className="btn btn-secondary">Create New</a>
                </Link>
                <Link
                  as={`/customers/${customer.id}/contacts`}
                  href="/customers/[id]/contacts"
                >
                  <a className="btn btn-primary ml-2">See All</a>
                </Link>
              </CardFooter>
            */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Customer;
