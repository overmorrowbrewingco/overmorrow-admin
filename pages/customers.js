import React from 'react';
import Head from 'next/head';

import Content from '~/components/UI/AdminLTE/Content';
import Customers from '~/components/Customers';

const CustomersPage = () => {
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
    <Content breadcrumbs={breadcrumbs} title="Customers">
      <Head>
        <title>Customers</title>
      </Head>

      <Customers />
    </Content>
  );
};

export default CustomersPage;
