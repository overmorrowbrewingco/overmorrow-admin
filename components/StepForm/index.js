import React, { Fragment, useState } from 'react';
import { merge } from 'lodash';
import { useForm } from 'react-hook-form';

import Loading from '~/components/Loading';

import './StepForm.scss';

const StepForm = ({
  ButtonWrapper,
  HeaderWrapper,
  loading,
  onCancel,
  onSubmit,
  steps = [],
}) => {
  const formState = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(null);

  const lastStep = steps.length;

  const onStepForwards = () =>
    currentStep >= lastStep
      ? setCurrentStep(currentStep)
      : setCurrentStep(currentStep + 1);

  const onStepBackwards = (e) => {
    e.preventDefault();

    if (currentStep <= 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFormSubmit = (values) => {
    if (currentStep === lastStep) {
      onSubmit(merge(data, values));
    } else {
      setData(merge(data, values));
      onStepForwards();
    }
  };

  const StepComponent = steps[currentStep - 1].Component;

  return (
    <Fragment>
      {HeaderWrapper ? (
        <HeaderWrapper>
          Step {currentStep}: {steps[currentStep - 1].title}
        </HeaderWrapper>
      ) : (
        <h3>
          Step {currentStep}: {steps[currentStep - 1].title}
        </h3>
      )}
      <form
        className="StepForm"
        onSubmit={formState.handleSubmit(onFormSubmit)}
      >
        {loading && (
          <Loading className="StepForm__loading" fullScreen={false} />
        )}

        <StepComponent
          data={data}
          errors={formState.errors}
          register={formState.register}
        />

        {ButtonWrapper ? (
          <ButtonWrapper>
            {onCancel && (
              <button
                className="btn btn-danger float-left"
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault();
                  onCancel();
                }}
              >
                Cancel
              </button>
            )}

            {currentStep > 1 && (
              <button
                className="btn btn-outline mr-3"
                disabled={loading}
                onClick={onStepBackwards}
              >
                Previous
              </button>
            )}

            <button
              className="btn btn-primary"
              disabled={loading}
              type="submit"
            >
              {currentStep === lastStep ? 'Submit' : 'Next'}
            </button>
          </ButtonWrapper>
        ) : (
          <div>
            {onCancel && (
              <button
                className="btn btn-danger float-left"
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault();
                  onCancel();
                }}
              >
                Cancel
              </button>
            )}

            {currentStep > 1 && (
              <button
                className="btn btn-outline mr-3"
                disabled={loading}
                onClick={onStepBackwards}
              >
                Previous
              </button>
            )}

            <button
              className="btn btn-primary"
              disabled={loading}
              type="submit"
            >
              {currentStep === lastStep ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default StepForm;
