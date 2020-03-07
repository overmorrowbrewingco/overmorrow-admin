import React from 'react';
import Content from '~/components/UI/AdminLTE/Content';

import CustomersNew from '~/components/Customers/New';

const CustomersNewBusinessPage = () => {
  return (
    <Content
      breadcrumbs={[
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
      ]}
      title="New Business"
    >
      <CustomersNew />
    </Content>
  );
};

export default CustomersNewBusinessPage;
