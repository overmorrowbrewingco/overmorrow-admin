import React, { Fragment, useState } from 'react';
import { merge } from 'lodash';
import { useForm } from 'react-hook-form';

const StepForm = ({
  ButtonWrapper,
  HeaderWrapper,
  onFinalSubmit,
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

  const onSubmit = (values) => {
    if (currentStep === lastStep) {
      onFinalSubmit(merge(data, values));
    } else {
      setData(merge(data, values));
      onStepForwards();
    }
  };

  const StepComponent = steps[currentStep - 1].Component;

  return (
    <Fragment>
      {HeaderWrapper ? (
        <HeaderWrapper>{steps[currentStep - 1].title}</HeaderWrapper>
      ) : (
        <h3>{steps[currentStep - 1].title}</h3>
      )}
      <form onSubmit={formState.handleSubmit(onSubmit)}>
        <div>
          <StepComponent
            data={data}
            errors={formState.errors}
            register={formState.register}
          />
        </div>

        {ButtonWrapper ? (
          <ButtonWrapper>
            {currentStep > 1 && (
              <button
                className="btn btn-outline mr-3"
                onClick={onStepBackwards}
              >
                Previous
              </button>
            )}

            <button className="btn btn-primary" type="submit">
              {currentStep === lastStep ? 'Submit' : 'Next'}
            </button>
          </ButtonWrapper>
        ) : (
          <div>
            {currentStep > 1 && (
              <button
                className="btn btn-outline mr-3"
                onClick={onStepBackwards}
              >
                Previous
              </button>
            )}

            <button className="btn btn-primary" type="submit">
              {currentStep === lastStep ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default StepForm;
