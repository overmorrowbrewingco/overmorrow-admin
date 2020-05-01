import React from 'react';
import { useFormContext } from 'react-hook-form';

import AddressForm from 'components/FormFragments/AddressForm';
import FormInput from 'components/UI/FormInput';
import FormTextArea from 'components/UI/FormTextArea';

interface Props {
  data?: object;
}

const CustomerNewStepThree: React.FC<Props> = ({ data }) => {
  const { errors, register, setValue } = useFormContext();

  return (
    <div className="CustomerNewStepThree card-body">
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
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <AddressForm
            data={data}
            namespace="[locations][data][0][address][data]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerNewStepThree;
