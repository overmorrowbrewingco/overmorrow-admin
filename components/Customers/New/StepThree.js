import React from 'react';
import { get } from 'lodash';

import AddressFormFields from '~/components/AddressFormFields';
import FormGroup from '~/components/UI/AdminLTE/FormGroup';

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
        <FormGroup
          error={get(errors, 'locations.data[0].name')}
          label="Location Name"
          name="[locations][data][0][name]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'locations.data[0].name')}
            name="[locations][data][0][name]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>

        <small className="form-text mb-3 text-muted">
          A name to distinguish this location from others. Can be something
          simple like "Hoan Kiem Taproom".
        </small>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <FormGroup
          error={get(errors, 'location[0].description')}
          label="Description"
          name="[locations][data][0][description]"
        >
          <textarea
            className="form-control"
            defaultValue={get(data, 'locations.data[0].description')}
            name="[locations][data][0][description]"
            rows={2}
          />
        </FormGroup>
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
