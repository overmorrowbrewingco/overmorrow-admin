import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import StepForm from '~/components/StepForm';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const CustomersNew = () => {
  const [createCustomer] = useMutation(gql`
    mutation CREATE_BUSINESS($business: [business_insert_input!]!) {
      insert_business(objects: $business) {
        affected_rows
      }
    }
  `);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-12 col-md-8">
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
            onFinalSubmit={(data) =>
              createCustomer({ variables: { business: data } })
            }
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
                title: 'Primary Location',
              },
              {
                Component: StepFour,
                title: 'Primary Contact',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomersNew;
