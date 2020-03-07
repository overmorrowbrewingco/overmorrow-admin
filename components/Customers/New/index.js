import React from 'react';
import { useRouter } from 'next/router';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import StepForm from '~/components/StepForm';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const CustomersNew = () => {
  const router = useRouter();

  const [createCustomer, { error, loading }] = useMutation(gql`
    mutation CREATE_BUSINESS($business: [business_insert_input!]!) {
      insert_business(objects: $business) {
        affected_rows
      }
    }
  `);

  const onCancel = () => router.push('/customers');

  const onSubmit = (data) => createCustomer({ variables: { business: data } });

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-12 col-md-8">
        {error && <div className="alert alert-danger">{error.message}</div>}

        <div className="card card-primary">
          <StepForm
            ButtonWrapper={({ children }) => (
              <div className="card-footer text-right">{children}</div>
            )}
            HeaderWrapper={({ children }) => (
              <div className="card-header">
                <h3 className="card-title">{children}</h3>
              </div>
            )}
            loading={loading}
            onCancel={onCancel}
            onSubmit={onSubmit}
            steps={[
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
                title: 'Primary Contact',
              },
              {
                Component: StepFour,
                title: 'Primary Location',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomersNew;
