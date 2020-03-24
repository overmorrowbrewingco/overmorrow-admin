import React from 'react';
import { useFormContext } from 'react-hook-form';

import FormInput from 'components/UI/FormInput';
import FormSelect from 'components/UI/FormSelect';
import FormTextArea from 'components/UI/FormTextArea';

interface Props {
  data?: object;
}

const CustomerNewStepOne: React.FC<Props> = ({ data }) => {
  const { errors, register } = useFormContext();

  return (
    <div className="CustomerNewStepOne card-body">
      {/* Hidden customer_type value, must be set to business */}
      <input
        name="customer[data][customer_type]"
        ref={register()}
        type="hidden"
        value="business"
      />

      <div className="row">
        <div className="col-sm-6">
          <FormInput
            data={data}
            errors={errors}
            label="Business Name"
            name="customer[data][name]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <FormSelect
            data={data}
            errors={errors}
            label="Account Status"
            name="account_status"
            ref={register({ required: 'Required' })}
            options={[
              { value: 'potential', label: 'Potential' },
              { value: 'pending', label: 'Pending' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <FormTextArea
            data={data}
            errors={errors}
            label="Description"
            name="customer[data][description]"
            ref={register()}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerNewStepOne;
