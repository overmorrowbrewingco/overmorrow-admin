import React from 'react';
import { get } from 'lodash';

import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const StepThree = ({ data, errors, register }) => (
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
      <div className="col-sm-6">
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

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'locations.data[0].city')}
          label="City"
          name="[locations][data][0][city]"
        >
          <select
            className="form-control"
            defaultValue={get(data, 'locations.data[0].city')}
            name="[locations][data][0][city]"
            ref={register({
              required: 'Required',
            })}
          >
            <option value="" />
            <option value="Hanoi">Hanoi</option>
            <option value="Ho Chi Minh City">Ho Chi Minh City</option>
          </select>
        </FormGroup>
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
        <hr />
      </div>
    </div>

    <div className="row">
      <input
        name="[locations][data][0][address][data][country_code]"
        ref={register()}
        type="hidden"
        value="VN"
      />

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'locations.data[0].address.data.address_line_1')}
          label="Address Line 1"
          name="[locations][data][0][address][data][address_line_1]"
        >
          <input
            autocomplete="address-line1"
            className="form-control"
            defaultValue={get(data, 'locations.data[0].address_line_1')}
            name="[locations][data][0][address][data][address_line_1]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'locations.data[0].address.data.address_line_2')}
          label="Address Line 2"
          name="[locations][data][0][address][data][address_line_2]"
        >
          <input
            autocomplete="address-line2"
            className="form-control"
            defaultValue={get(data, 'locations.data[0].address_line_2')}
            name="[locations][data][0][address][data][address_line_2]"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'locations.data[0].address.data.admin_area_3')}
          label="District"
          name="[locations][data][0][address][data][admin_area_3]"
        >
          <input
            autocomplete="address-level3"
            className="form-control"
            defaultValue={get(data, 'locations.data[0].admin_area_3')}
            name="[locations][data][0][address][data][admin_area_3]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'locations.data[0].address.data.admin_area_2')}
          label="City"
          name="[locations][data][0][address][data][admin_area_2]"
        >
          <input
            autocomplete="address-level2"
            className="form-control"
            defaultValue={get(data, 'locations.data[0].admin_area_2')}
            name="[locations][data][0][address][data][admin_area_2]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>
      </div>
    </div>
  </div>
);

export default StepThree;
