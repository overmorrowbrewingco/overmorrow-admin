import React from 'react';
import { get } from 'lodash';

import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const StepOne = ({ data, errors, register }) => (
  <div className="card-body">
    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'customer.data.name')}
          label="Business Name"
          name="customer[data][name]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'customer.data.name')}
            name="customer[data][name]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={errors.account_status}
          label="Account Status"
          name="account_status"
        >
          <select
            className="form-control"
            defaultValue={get(data, 'account_status')}
            name="account_status"
            ref={register({ required: 'Required' })}
          >
            <option value="" />
            <option value="potential">Potential</option>
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <FormGroup
          defaultValue={get(data, 'customer.data.description')}
          errors={get(errors, 'customer.data.description')}
          label="Description"
          name="customer[data][description]"
        >
          <textarea
            className="form-control"
            name="customer[data][description]"
            ref={register()}
            rows={3}
          />
        </FormGroup>
      </div>
    </div>
  </div>
);

export default StepOne;
