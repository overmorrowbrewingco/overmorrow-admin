import React from 'react';
import Head from 'next/head';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import PageContentWrapper from 'components/PageContentWrapper';
import Customer from 'components/Customer';

const CustomerPage: React.FC = (props) => {
  const id = get(props, 'router.query.id');

  const { data, error, loading } = useQuery(
    gql`
      query CUSTOMER_PAGE_QUERY($id: uuid!) {
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
  ];

  return (
    <PageContentWrapper breadcrumbs={breadcrumbs} title={customer.name}>
      <Head>
        <title>{customer.name}</title>
      </Head>

      <Customer id={customer.id} />
    </PageContentWrapper>
  );
};

export default CustomerPage;
