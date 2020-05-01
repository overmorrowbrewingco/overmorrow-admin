import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';

import BusinessForm from 'components/FormFragments/BusinessForm';
import BusinessLocationForm from 'components/FormFragments/BusinessLocationForm';
import ContactForm from 'components/FormFragments/ContactForm';
import CustomerForm from 'components/FormFragments/CustomerForm';
import StepForm from 'components/StepForm';

import ButtonWrapper from './ButtonWrapper';
import HeaderWrapper from './HeaderWrapper';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import StepWrapper from './StepWrapper';
import Wrapper from './Wrapper';

const CustomersNew: React.FC = () => {
  const router = useRouter();

  const [createCustomer, { data, error, loading }] = useMutation(
    gql`
      mutation CREATE_BUSINESS($business: [business_insert_input!]!) {
        insert_business(objects: $business) {
          affected_rows
        }
      }
    `,
  );

  const onCancel = (): void => {
    router.push('/customers');
  };

  const onSubmit = (formData): void => {
    createCustomer({ variables: { business: formData } });
  };

  const steps = [
    {
      Component: ({ data }): JSX.Element => (
        <CustomerForm data={data} namespace="customer[data]" />
      ),
      title: 'Basic Information',
    },
    {
      Component: ({ data }): JSX.Element => <BusinessForm data={data} />,
      title: 'Business Information',
    },
    {
      Component: ({ data }): JSX.Element => (
        <BusinessLocationForm data={data} namespace="[locations][data][0]" />
      ),
      title: 'Primary Location',
    },
    {
      Component: ({ data }): JSX.Element => (
        <ContactForm data={data} namespace="contacts[data][0]" />
      ),
      title: 'Primary Contact',
    },
  ];

  // When we get back data from the mutation, push to the list page
  useEffect(() => {
    console.log(data, error);
    // if (data) {
    //   router.push('/customers');
    // }
  }, [data, router]);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-12 col-md-8">
        {error && <div className="alert alert-danger">{error.message}</div>}

        <StepForm
          ButtonWrapper={ButtonWrapper}
          HeaderWrapper={HeaderWrapper}
          loading={loading}
          onCancel={onCancel}
          onSubmit={onSubmit}
          showBreadcrumbs
          showHeader
          steps={steps}
          StepWrapper={StepWrapper}
          Wrapper={Wrapper}
        />
      </div>
    </div>
  );
};

export default CustomersNew;
