import React, { useState } from 'react';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

const CustomersNew = () => {
  const [formState, setFormState] = useState({});
  const [step, setStep] = useState(1);

  const stepBack = () => (step >= 1 ? setStep(1) : setStep(step + 1));
  const stepForward = () => setStep(step + 1);

  const onStepSubmit = (values) => {
    setFormState({ ...formState, ...values });
    stepForward();
  };

  switch (step) {
    case 1:
      return <StepOne formState={formState} onSubmit={onStepSubmit} />;

    case 2:
      return (
        <StepTwo
          formState={formState}
          onSubmit={onStepSubmit}
          stepBack={stepBack}
        />
      );

    default:
      setStep(1);
      return null;
  }
};

export default CustomersNew;
