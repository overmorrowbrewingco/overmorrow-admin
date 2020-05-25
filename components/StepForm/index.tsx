import React, { Fragment, useState } from 'react';
import cx from 'classnames';
import { merge } from 'lodash';
import { FormContext, useForm } from 'react-hook-form';

import Loading from 'components/Loading';

import './StepForm.scss';

interface StepProps {
  data?: object;
}

export type Step = {
  Component: React.FC<StepProps>;
  title: string;
};

interface Props {
  ButtonWrapper?: React.FC;
  FooterWrapper?: React.FC;
  HeaderWrapper?: React.FC;
  StepWrapper?: React.FC;
  Wrapper?: React.FC;
  loading?: boolean;
  onCancel: Function;
  onSubmit: Function;
  showBreadcrumbs?: boolean;
  showHeader?: boolean;
  steps: Step[];
}

const StepForm: React.FC<Props> = ({
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

  const onStepForwards = (): void => {
    currentStep >= lastStep
      ? setCurrentStep(currentStep)
      : setCurrentStep(currentStep + 1);
  };

  const onStepBackwards = (e): void => {
    e.preventDefault();

    if (currentStep <= 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFormSubmit = (values): void => {
    if (currentStep === lastStep) {
      onSubmit(merge(data, values));
    } else {
      setData(merge(data, values));
      onStepForwards();
    }
  };

  const NullWrapper: React.FC = ({ children }) => (
    <Fragment>{children}</Fragment>
  );

  const ButtonWrapper = props.ButtonWrapper || NullWrapper;
  const HeaderWrapper = props.HeaderWrapper || NullWrapper;
  const StepWrapper = props.StepWrapper || NullWrapper;
  const Wrapper = props.Wrapper || NullWrapper;
  const StepComponent = steps[currentStep - 1].Component;

  return (
    <FormContext {...formState}>
      <div className="StepForm">
        {showBreadcrumbs && (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              {steps.slice(0, currentStep).map((step, index) => (
                <li
                  className={cx('breadcrumb-item', {
                    active: index + 1 === currentStep,
                  })}
                  key={index}
                >
                  Step {index + 1}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Wrapper>
          {loading && (
            <Loading className="StepForm__loading" fullScreen={false} />
          )}

          <form onSubmit={formState.handleSubmit(onFormSubmit)}>
            {showHeader && (
              <HeaderWrapper>{steps[currentStep - 1].title}</HeaderWrapper>
            )}

            <StepWrapper>
              <StepComponent data={data} />
            </StepWrapper>

            <ButtonWrapper>
              {onCancel && (
                <button
                  className="btn btn-danger float-left"
                  disabled={loading}
                  onClick={(e): void => {
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
        </Wrapper>
      </div>
    </FormContext>
  );
};

export default StepForm;
