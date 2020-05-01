import React from 'react';
import Head from 'next/head';

import PageContentWrapper from 'components/PageContentWrapper';
import CustomerNew from 'components/CustomerNew';

const CustomersNewBusinessPage: React.FC = () => {
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
      href: '/customers/new',
      title: 'New Customer',
    },
  ];

  return (
    <PageContentWrapper breadcrumbs={breadcrumbs} title="New Customer">
      <Head>
        <title>New Customer</title>
      </Head>

      <CustomerNew />
    </PageContentWrapper>
  );
};

export default CustomersNewBusinessPage;
