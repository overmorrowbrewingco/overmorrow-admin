import React from 'react';

import AddressFormFields from '~/components/AddressFormFields';
import FormInput from '~/components/UI/FormInput';
import FormTextArea from '~/components/UI/FormTextArea';

const StepThree = ({ data, errors, register, setValue }) => (
  <div className="card-body">
    <div className="row">
      <div className="col-sm-12">
        <small className="form-text mb-3 text-muted">
          The primary location for this account. You will be able to add more
          locations later.
        </small>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <FormInput
          data={data}
          errors={errors}
          info='A name to distinguish this location from others. Can be something simple like "Hoan Kiem Taproom"'
          label="Location Name"
          name="[locations][data][0][name]"
          ref={register({
            required: 'Required',
          })}
          type="text"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <FormTextArea
          data={data}
          errors={errors}
          label="Description"
          name="[locations][data][0][description]"
          ref={register()}
          rows={2}
          type="text"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <AddressFormFields
          data={data}
          errors={errors}
          namespace="[locations][data][0]"
          register={register}
          setValue={setValue}
        />
      </div>
    </div>
  </div>
);

export default StepThree;
