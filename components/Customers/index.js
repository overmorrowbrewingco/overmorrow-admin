import React, { Fragment } from 'react';
import Link from 'next/link';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const Customers = () => {
  const { data, error, loading } = useQuery(gql`
    query BUSINESS_CUSTOMERS {
      customer(where: { customer_type: { _eq: business } }) {
        id
        name

        business {
          account_status
          id
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

            <li className="nav-item">
              <a
                className="btn btn-dark nav-link"
                href="/customers/new/individual"
              >
                <i className="fa fa-plus nav-icon" /> Create Individual
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="row">
        <nav className="navbar navbar-expand">
          <form className="form-inline">
            <li className="nav-item form-group mr-2">
              <label htmlFor="city">
                City
                <select className="form-control" value="city">
                  <option value=""></option>
                  <option value="Hanoi">Hanoi</option>
                  <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                </select>
              </label>
            </li>

            <li className="nav-item form-group">
              <label htmlFor="account_status">
                Account Status
                <select className="form-control" name="account_status">
                  <option value=""></option>
                  <option value="potential">Potential</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                </select>
              </label>
            </li>
          </form>
        </nav>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">Businesses</div>

            <div className="card-body table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Account Status</th>
                  </tr>
                </thead>

                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td>{customer.name}</td>
                      <td>{get(customer, 'business.account_status')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Customers;
