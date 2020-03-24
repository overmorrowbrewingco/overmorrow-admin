import React, { Fragment, useState } from 'react';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// import BusinessCustomersQuery from './query.graphql';
import CustomerList from 'components/UI/CustomerList';
import CustomerListFilters from 'components/UI/CustomerListFilters';
import Loading from 'components/Loading';
import PaginationControls from 'components/UI/PaginationControls';

interface Props {
  limit?: number;
}

const BusinessCustomers: React.FC<Props> = ({ limit = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState(null);
  const [status, setStatus] = useState(null);

  const offset = (currentPage - 1) * limit;

  const { data, error, loading, networkStatus } = useQuery(
    gql`
      query BUSINESS_CUSTOMERS(
        $limit: Int
        $offset: Int
        $orderBy: [customer_order_by!]
        $status: business_account_status_enum
      ) {
        customer_aggregate(
          where: {
            business: { account_status: { _eq: $status } }
            customer_type: { _eq: business }
          }
        ) {
          aggregate {
            count
          }
        }

        customer(
          limit: $limit
          offset: $offset
          order_by: $orderBy
          where: {
            business: { account_status: { _eq: $status } }
            customer_type: { _eq: business }
          }
        ) {
          created_at
          id
          name

          business {
            account_status
            id

            website

            locations_aggregate {
              aggregate {
                count
              }
            }
          }
        }
      }
    `,
    {
      variables: { limit, offset, orderBy, status },
    },
  );

  if (error) throw new Error(error.message);

  const customers = get(data, 'customer', []);
  const totalCount = get(data, 'customer_aggregate.aggregate.count');
  const totalPages = Math.ceil(totalCount / limit);

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
            {totalCount <= 0 ? (
              <span>None found.</span>
            ) : (
              <div className="row">
                <div className="col-sm-12">
                  <CustomerList
                    customers={customers}
                    offset={offset}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                  />

                  {totalPages > 1 && (
                    <PaginationControls
                      currentPage={currentPage}
                      limit={limit}
                      onPageChange={setCurrentPage}
                      totalCount={totalCount}
                      totalPages={totalPages}
                    />
                  )}
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
