import React from 'react';
import Head from 'next/head';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CustomerNewContact from 'components/CustomerNewContact';
import PageContentWrapper from 'components/PageContentWrapper';

const CustomerNewContactPage: React.FC = (props) => {
  const id = get(props, 'router.query.id');

  const { data, error, loading } = useQuery(
    gql`
      query CUSTOMER_NEW_CONTACT_PAGE_QUERY($id: uuid!) {
        customer(where: { id: { _eq: $id } }) {
          id
          name
        }
      }
    `,
    {
      skip: !id,
      variables: {
        id,
      },
    },
  );

  if (loading) return null;

  if (error) throw new Error(error.message);

  const customer = get(data, 'customer[0]');

  if (!customer) return <div>NOT FOUND</div>;

  const breadcrumbs = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/customers',
      title: 'Customers',
    },
    {
      as: `/customers/${customer.id}`,
      href: '/customers/[id]',
      title: customer.name,
    },
    {
      as: `/customers/${customer.id}/contacts`,
      href: '/customers/[id]/contacts',
      title: 'Contacts',
    },
    {
      as: `/customers/${customer.id}/contacts/new`,
      href: '/customers/[id]/contacts/new',
      title: 'New',
    },
  ];

  return (
    <PageContentWrapper
      breadcrumbs={breadcrumbs}
      subtitle={customer.name}
      title="New Contact"
    >
      <Head>
        <title>New Contact - {customer.name}</title>
      </Head>

      <CustomerNewContact id={customer.id} />
    </PageContentWrapper>
  );
};

export default CustomerNewContactPage;
