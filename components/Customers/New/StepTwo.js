import React from 'react';
import { get } from 'lodash';

import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const StepTwo = ({ data, errors, register }) => (
  <div className="card-body">
    <div className="row">
      <div className="col-sm-12">
        <small className="form-text mb-3 text-muted">
          These details should be general contact information for the business
          itself that we can display publicly for our customers. For any
          individual person working at this business, please create a contact.
        </small>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup error={errors.website} label="Website" name="website">
          <input
            autoComplete="url"
            className="form-control"
            defaultValue={get(data, 'website')}
            name="website"
            ref={register()}
            type="url"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={errors.phone_number}
          label="Phone Number"
          name="phone_number"
        >
          <input
            autoComplete="tel"
            className="form-control"
            defaultValue={get(data, 'phone_number')}
            name="phone_number"
            ref={register()}
            type="tel"
          />
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup error={errors.email} label="Email" name="email">
          <input
            autoComplete="email"
            className="form-control"
            defaultValue={get(data, 'email')}
            name="email"
            ref={register()}
            type="email"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={errors.facebook_username}
          label="Facebook Username"
          name="facebook_username"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'facebook_username')}
            name="facebook_username"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={errors.instagram_username}
          label="Instagram Username"
          name="instagram_username"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'instagram_username')}
            name="instagram_username"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>
  </div>
);

export default StepTwo;
