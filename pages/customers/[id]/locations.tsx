import React from 'react';
import Head from 'next/head';
import { get } from 'lodash';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import CustomerLocations from 'components/CustomerLocations';
import PageContentWrapper from 'components/PageContentWrapper';

const CustomerLocationsPage: React.FC = (props) => {
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
    {
      as: `/customers/${customer.id}/locations`,
      href: '/customers/[id]/locations',
      title: 'Locations',
    },
  ];

  return (
    <PageContentWrapper
      breadcrumbs={breadcrumbs}
      subtitle={customer.name}
      title={'Locations'}
    >
      <Head>
        <title>Locations - {customer.name}</title>
      </Head>

      <CustomerLocations id={customer.id} />
    </PageContentWrapper>
  );
};

export default CustomerLocationsPage;
