import React, { Fragment, useState } from 'react';
import { get } from 'lodash';
import { useQuery } from '@apollo/react-hooks';

import BusinessCustomersQuery from '~/graphql/queries/BusinessCustomersQuery.graphql';
import CustomerList from '~/components/UI/CustomerList';
import CustomerListFilters from '~/components/UI/CustomerListFilters';
import Loading from '~/components/Loading';

const BusinessCustomers = () => {
  const [orderBy, setOrderBy] = useState({ name: 'desc' });
  const [status, setStatus] = useState(null);

  const { data, error, loading, networkStatus } = useQuery(
    BusinessCustomersQuery,
    {
      variables: { orderBy, status },
    },
  );

  if (error) throw new Error(error);

  const customers = get(data, 'customer', []);

  return (
    <div className="BusinessCustomers card">
      <div className="card-header">
        <h3 className="card-title">Businesses</h3>
      </div>

      <div className="card-body">
        {loading && networkStatus === 1 ? (
          <Loading fullScreen={false} />
        ) : (
          <Fragment>
            <div className="row">
              <div className="col-sm-12 mb-2">
                <CustomerListFilters
                  filters={[
                    {
                      label: 'Status',
                      name: 'status',
                      onChange: setStatus,
                      options: [
                        { label: 'Pending', value: 'pending' },
                        { label: 'Potential', value: 'potential' },
                        { label: 'Active', value: 'active' },
                        { label: 'Inactive', value: 'inactive' },
                      ],
                      value: status,
                    },
                  ]}
                />
              </div>
            </div>
            {customers.length <= 0 ? (
              <span>None found.</span>
            ) : (
              <div className="row">
                <div className="col-sm-12">
                  <CustomerList
                    customers={customers}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                  />
                </div>
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default BusinessCustomers;
