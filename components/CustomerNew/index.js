import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';

import StepForm from '~/components/StepForm';

import ButtonWrapper from './ButtonWrapper';
import HeaderWrapper from './HeaderWrapper';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import StepWrapper from './StepWrapper';

import createBusinessMutation from './createBusiness.graphql';

const CustomersNew = () => {
  const router = useRouter();

  const [createCustomer, { data, error, loading }] = useMutation(
    createBusinessMutation,
  );

  const onCancel = () => router.push('/customers');

  const onSubmit = (formData) =>
    createCustomer({ variables: { business: formData } });

  const steps = [
    {
      Component: StepOne,
      title: 'Basic Information',
    },
    {
      Component: StepTwo,
      title: 'Business Contact Information',
    },
    {
      Component: StepThree,
      title: 'Primary Location',
    },
    {
      Component: StepFour,
      title: 'Primary Contact',
    },
  ];

  // When we get back data from the mutation, push to the list page
  useEffect(() => {
    if (data) {
      router.push('/customers');
    }
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
        />
      </div>
    </div>
  );
};

export default CustomersNew;
