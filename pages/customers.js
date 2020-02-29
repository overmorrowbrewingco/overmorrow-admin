import React from 'react';

import Content from '~/components/UI/AdminLTE/Content';
import Customers from '~/components/Customers';

const CustomersPage = () => {
  return (
    <Content title="Customers" titleButton="Home">
      <Customers />
    </Content>
  );
};

export default CustomersPage;
