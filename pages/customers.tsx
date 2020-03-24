import React from 'react';
import Head from 'next/head';

import PageContentWrapper from 'components/PageContentWrapper';
import Customers from 'components/Customers';

const CustomersPage: React.FC = () => {
  const breadcrumbs = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/customers',
      title: 'Customers',
    },
  ];

  return (
    <PageContentWrapper breadcrumbs={breadcrumbs} title="Customers">
      <Head>
        <title>Customers</title>
      </Head>

      <Customers />
    </PageContentWrapper>
  );
};

export default CustomersPage;
