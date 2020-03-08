import React, { Fragment } from 'react';
import Link from 'next/link';
import { DateTime } from 'luxon';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const Customers = () => {
  const { data, error, loading } = useQuery(gql`
    query BUSINESS_CUSTOMERS {
      customer(where: { customer_type: { _eq: business } }) {
        created_at
        id
        name

        business {
          account_status
          id

          website

          contacts_aggregate {
            aggregate {
              count
            }
          }

          locations_aggregate {
            aggregate {
              count
            }
          }
        }
      }
    }
  `);

  if (loading) {
    return null;
  }

  const customers = get(data, 'customer', []);

  if (error) {
    console.error(error);
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Businesses</h3>
            </div>

            {customers.length <= 0 ? (
              <div className="card-body">None found.</div>
            ) : (
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Created On</th>
                      <th>Website</th>
                      <th># of Locations</th>
                      <th># of Contacts</th>
                      <th>Account Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>
                          {DateTime.fromISO(
                            get(customer, 'created_at'),
                          ).toFormat('LLL dd, yyyy')}
                        </td>
                        <td>{get(customer, 'business.website')}</td>
                        <td>
                          {get(
                            customer,
                            'business.locations_aggregate.aggregate.count',
                          )}
                        </td>
                        <td>
                          {get(
                            customer,
                            'business.contacts_aggregate.aggregate.count',
                          )}
                        </td>
                        <td>
                          <span className="badge bg-primary">
                            {get(customer, 'business.account_status')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row justify-content-end">
        <nav className="navbar navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/customers/new/business">
                <a
                  className="btn btn-dark mr-2 nav-link"
                  href="/customers/new/business"
                >
                  <i className="fa fa-plus nav-icon" /> Create Business
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Customers;
