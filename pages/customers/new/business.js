import React from 'react';
import Head from 'next/head';

import Content from '~/components/UI/AdminLTE/Content';
import CustomersNew from '~/components/Customers/New';

const CustomersNewBusinessPage = () => {
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
      href: '/customers/new/business',
      title: 'New Business',
    },
  ];

  return (
    <Content breadcrumbs={breadcrumbs} title="New Business">
      <Head>
        <title>New Business</title>
      </Head>

      <CustomersNew />
    </Content>
  );
};

export default CustomersNewBusinessPage;
