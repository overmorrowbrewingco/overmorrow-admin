import React, { Fragment, useState } from 'react';
import { get } from 'lodash';
import { Table } from 'react-bootstrap';
import { useQuery } from '@apollo/react-hooks';

import Loading from 'components/Loading';
import PaginationControls from 'components/UI/PaginationControls';

import ContactListQuery from './query';

interface Props {
  businessId?: string;
  businessLocationId?: string;
  isCompact?: boolean;
  limit?: number;
}

const ContactList: React.FC<Props> = ({
  businessId,
  businessLocationId,
  isCompact,
  limit = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const offset = (currentPage - 1) * limit;

  const { data, error, loading } = useQuery(ContactListQuery, {
    variables: {
      businessId,
      businessLocationId,
      limit,
      offset,
    },
  });

  if (loading && !data) return <Loading fullScreen={false} />;

  if (error) throw new Error(error.message);

  const contacts = get(data, 'contact', []);
  const count = get(data, 'contact_aggregate.aggregate.count');
  const pages = Math.ceil(count / limit);

  if (contacts.length === 0) {
    return <span>None found.</span>;
  }

  return (
    <Fragment>
      {loading ? (
        <Loading fullScreen={false} />
      ) : (
        <Table className="mb-4" striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Title</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, i) => (
              <tr key={contact.id}>
                <td>{i + 1 + offset}</td>
                <td>{contact.full_name}</td>
                <td>{contact.title}</td>
                <td>
                  {contact.primary && (
                    <span className="badge bg-success">Primary</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {pages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          limit={limit}
          onPageChange={setCurrentPage}
          totalCount={count}
          totalPages={pages}
        />
      )}
    </Fragment>
  );
};

export default ContactList;
