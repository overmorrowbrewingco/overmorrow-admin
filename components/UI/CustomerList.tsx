import React from 'react';
import Link from 'next/link';
import { DateTime } from 'luxon';
import { get, set } from 'lodash';

import AccountStatusBadge from 'components/UI/AccountStatusBadge';
import { Customer } from 'types/Customer';

interface Props {
  customers?: Customer[];
  offset: number;
  orderBy: string;
  setOrderBy: Function;
}

interface ElementProps {
  namespace: string;
}

const CustomerList: React.FC<Props> = ({
  customers = [],
  offset,
  orderBy,
  setOrderBy,
}) => {
  const SortIcon: React.FC<ElementProps> = ({ namespace }) => {
    if (get(orderBy, namespace) === 'desc')
      return <i className="fa fa-chevron-down" />;

    if (get(orderBy, namespace) === 'asc')
      return <i className="fa fa-chevron-up" />;

    return null;
  };

  const toggleSort: void = (namespace) => {
    const newOrderBy = {};

    if (get(orderBy, namespace) === 'desc') {
      set(newOrderBy, namespace, 'asc');
    } else {
      set(newOrderBy, namespace, 'desc');
    }

    setOrderBy(newOrderBy);
  };

  const TH: React.FC<ElementProps> = ({ children, namespace }) => (
    <th className="TH" onClick={(): void => toggleSort(namespace)}>
      {children} <SortIcon namespace={namespace} />
    </th>
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <TH namespace="name">
            <span className="text-nowrap">Name</span>
          </TH>
          <TH namespace="created_at">
            <span className="text-nowrap">Created At</span>
          </TH>
          <TH namespace="business[locations_aggregate][count]">
            <span className="text-nowrap"># of Locations</span>
          </TH>
          <TH namespace="business[account_status]">
            <span className="text-nowrap">Account Status</span>
          </TH>
          <th />
        </tr>
      </thead>

      <tbody>
        {customers.map((customer, i) => (
          <tr key={customer.id}>
            <td>{i + 1 + offset}</td>
            <td>{customer.name}</td>
            <td>
              {DateTime.fromISO(get(customer, 'created_at')).toLocaleString(
                DateTime.DATETIME_SHORT,
              )}
            </td>
            <td>
              {get(customer, 'business.locations_aggregate.aggregate.count')}
            </td>
            <td>
              <AccountStatusBadge
                status={get(customer, 'business.account_status')}
              />
            </td>
            <td>
              <Link href="/customers">
                <a className="btn btn-primary btn-sm mr-2" href="/customers">
                  View
                </a>
              </Link>

              <Link href="/customers">
                <a className="btn btn-secondary btn-sm" href="/customers">
                  Edit
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerList;
