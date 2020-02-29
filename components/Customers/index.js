import React from 'react';
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
  );
};

export default Customers;
