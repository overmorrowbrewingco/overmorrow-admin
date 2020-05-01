import React from 'react';

import CustomerForm from 'components/FormFragments/CustomerForm';

interface Props {
  data?: object;
}

const CustomerNewStepOne: React.FC<Props> = ({ data }) => (
  <CustomerForm data={data} namespace={'customer[data]'} />
);

export default CustomerNewStepOne;
