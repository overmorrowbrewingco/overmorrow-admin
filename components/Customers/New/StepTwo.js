import React from 'react';
import { useForm } from 'react-hook-form';

import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const StepTwo = ({ formState, onSubmit, stepBack }) => {
  const { errors, handleSubmit, register } = useForm();

  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Step Two: Contact Information</h3>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <h5>Contact Information</h5>

                  <small className="form-text mb-3 text-muted">
                    These details should be general contact information for the
                    business itself that we can display publicly for our
                    customers. For any individual person working at this
                    business, please create a contact.
                  </small>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <FormGroup
                    error={errors.website}
                    label="Website"
                    name="website"
                  >
                    <input
                      className="form-control"
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
                      className="form-control"
                      name="phone_number"
                      type="tel"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <FormGroup error={errors.email} label="Email" name="email">
                    <input className="form-control" name="email" type="email" />
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
                      name="facebook_username"
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
                      name="instagram_username"
                      type="text"
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer text-right">
            <button className="btn btn-outline-danger mr-3" type="cancel">
              Cancel
            </button>

            <button className="btn btn-secondary mr-3" onClick={stepBack}>
              Previous Step
            </button>

            <button className="btn btn-primary" type="submit">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepTwo;
