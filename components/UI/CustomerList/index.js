import React from 'react';
import { DateTime } from 'luxon';
import { get, set } from 'lodash';

import AccountStatusBadge from '~/components/UI/AccountStatusBadge';

const CustomerList = ({ customers = [], orderBy, setOrderBy }) => {
  const SortIcon = ({ namespace }) => {
    if (get(orderBy, namespace) === 'desc')
      return <i className="fa fa-chevron-down" />;

    if (get(orderBy, namespace) === 'asc')
      return <i className="fa fa-chevron-up" />;

    return null;
  };

  const toggleSort = (namespace) => {
    const newOrderBy = {};

    if (get(orderBy, namespace) === 'desc') {
      set(newOrderBy, namespace, 'asc');
    } else {
      set(newOrderBy, namespace, 'desc');
    }

    setOrderBy(newOrderBy);
  };

  const TH = ({ children, namespace }) => (
    <th className="TH" onClick={() => toggleSort(namespace)}>
      {children} <SortIcon namespace={namespace} />
    </th>
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <TH namespace="name">Name</TH>
          <TH namespace="created_at">Created On</TH>
          <TH namespace="business[website]">Website</TH>
          <TH namespace="business[locations_aggregate][count]">
            # of Locations
          </TH>
          <TH namespace="business[account_status]">Account Status</TH>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>
              {DateTime.fromISO(get(customer, 'created_at')).toFormat(
                'LLL dd, yyyy',
              )}
            </td>
            <td>{get(customer, 'business.website')}</td>
            <td>
              {get(customer, 'business.locations_aggregate.aggregate.count')}
            </td>
            <td>
              <AccountStatusBadge
                status={get(customer, 'business.account_status')}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
