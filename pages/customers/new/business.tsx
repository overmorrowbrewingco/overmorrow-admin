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
      href: '/customers/new/business',
      title: 'New Business',
    },
  ];

  return (
    <PageContentWrapper breadcrumbs={breadcrumbs} title="New Business">
      <Head>
        <title>New Business</title>
      </Head>

      <CustomerNew />
    </PageContentWrapper>
  );
};

export default CustomersNewBusinessPage;
