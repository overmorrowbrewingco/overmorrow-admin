import React, { useState } from 'react';
import cx from 'classnames';
import { merge } from 'lodash';
import { useForm } from 'react-hook-form';

import Loading from '~/components/Loading';

import './StepForm.scss';

const StepForm = ({
  loading,
  onCancel,
  onSubmit,
  showBreadcrumbs,
  showHeader,
  steps = [],
  ...props
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

  const NullWrapper = ({ children }) => children;

  const ButtonWrapper = props.ButtonWrapper || NullWrapper;
  const HeaderWrapper = props.HeaderWrapper || NullWrapper;
  const StepWrapper = props.StepWrapper || NullWrapper;
  const StepComponent = steps[currentStep - 1].Component;

  return (
    <div className="StepForm">
      {showBreadcrumbs && (
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            {steps.slice(0, currentStep).map((step, index) => (
              <li
                className={cx('breadcrumb-item', {
                  active: index + 1 === currentStep,
                })}
              >
                Step {index + 1}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <StepWrapper>
        {loading && (
          <Loading className="StepForm__loading" fullScreen={false} />
        )}

        <form onSubmit={formState.handleSubmit(onFormSubmit)}>
          {showHeader && (
            <HeaderWrapper>{steps[currentStep - 1].title}</HeaderWrapper>
          )}

          <StepComponent data={data} {...formState} />

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
        </form>
      </StepWrapper>
    </div>
  );
};

export default StepForm;
