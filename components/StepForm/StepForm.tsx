import React from 'react';

const StepForm = ({ children, loading }) => (
  <div className="StepForm">
    {/*{loading && <Loading className="StepForm__loading" fullScreen={false} />}*/}

    {children}
  </div>
);

export default StepForm;
