import React from 'react';
import { useForm } from 'react-hook-form';

import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const StepOne = ({ formState, onSubmit }) => {
  const { errors, handleSubmit, register } = useForm({
    defaultValues: formState,
  });

  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Step One: Basic Information</h3>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <FormGroup
                    error={errors.name}
                    label="Business Name"
                    name="name"
                  >
                    <input
                      className="form-control"
                      name="name"
                      ref={register({
                        required: 'Required',
                      })}
                      type="text"
                    />
                  </FormGroup>
                </div>

                <div className="col-sm-6">
                  <FormGroup
                    error={errors.vietnamese_name}
                    label="Vietnamese Name (if different)"
                    name="vietnamese_name"
                  >
                    <input
                      className="form-control"
                      name="vietnamese_name"
                      ref={register()}
                      type="text"
                    />
                  </FormGroup>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <FormGroup
                    error={errors.account_status}
                    label="Account Status"
                    name="account_status"
                  >
                    <select
                      className="form-control"
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
                  <FormGroup label="Description" name="description">
                    <textarea
                      className="form-control"
                      name="description"
                      ref={register()}
                      rows={3}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="card-footer text-right">
              <button className="btn btn-outline-danger mr-3" type="cancel">
                Cancel
              </button>

              <button className="btn btn-primary" type="submit">
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
