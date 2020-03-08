import React from 'react';

import FormInput from '~/components/UI/FormInput';

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
        <FormInput
          autoComplete="url"
          data={data}
          errors={errors}
          label="Website"
          name="website"
          ref={register()}
          type="url"
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          autoComplete="tel"
          data={data}
          errors={errors}
          label="Phone Number"
          name="phone_number"
          ref={register()}
          type="tel"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormInput
          autoComplete="email"
          data={data}
          errors={errors}
          label="Email"
          name="email"
          ref={register()}
          type="email"
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          data={data}
          errors={errors}
          label="Facebook Username"
          name="facebook_username"
          ref={register()}
          type="text"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormInput
          data={data}
          errors={errors}
          label="Instagram Username"
          name="instagram_username"
          ref={register()}
          type="text"
        />
      </div>
    </div>
  </div>
);

export default StepTwo;
