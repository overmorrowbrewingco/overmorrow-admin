import React from 'react';
import { get } from 'lodash';

import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const StepFour = ({ data, errors, register }) => (
  <div className="card-body">
    <input name="contacts[data][0]primary" type="hidden" value={true} />

    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          autoComplete="name"
          error={get(errors, 'primary_contact.data.full_name')}
          label="Full Name"
          name="contacts[data][0][full_name]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.full_name')}
            name="contacts[data][0][full_name]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          autoComplete="nickname"
          error={get(errors, 'primary_contact.data.preferred_name')}
          label="Preferred Name"
          name="contacts[data][0][preferred_name]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.preferred_name')}
            name="contacts[data][0][preferred_name]"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.title')}
          label="Title"
          name="contacts[data][0][title]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.title')}
            name="contacts[data][0][title]"
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.gender')}
          label="Gender"
          name="contacts[data][0][gender]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.gender')}
            name="contacts[data][0][gender]"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.preferred_language')}
          label="Preferred Language"
          name="contacts[data][0][preferred_language]"
        >
          <select
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.preferred_language')}
            name="contacts[data][0][preferred_language]"
            ref={register()}
            type="text"
          >
            <option value="" />
            <option value="English">English</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={get(
            errors,
            'primary_contact.data.preferred_communication_method',
          )}
          label="Preferred Communication Method"
          name="contacts[data][0][preferred_communication_method]"
        >
          <input
            className="form-control"
            defaultValue={get(
              data,
              'primary_contact.data.preferred_communication_method',
            )}
            name="contacts[data][0][preferred_communication_method]"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.email')}
          label="Email"
          name="contacts[data][0][email]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.email')}
            name="contacts[data][0][email]"
            ref={register()}
            type="email"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.phone_number')}
          label="Phone Number"
          name="contacts[data][0][phone_number]"
        >
          <input
            autoComplete="email"
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.phone_number')}
            name="contacts[data][0][phone_number]"
            ref={register()}
            type="tel"
          />
        </FormGroup>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.facebook_username')}
          label="Facebook Username"
          name="contacts[data][0][facebook_username]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.facebook_username')}
            name="contacts[data][0][facebook_username]"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>

      <div className="col-sm-6">
        <FormGroup
          error={get(errors, 'primary_contact.data.instagram_username')}
          label="Instagram Username"
          name="contacts[data][0][instagram_username]"
        >
          <input
            className="form-control"
            defaultValue={get(data, 'primary_contact.data.instagram_username')}
            name="contacts[data][0][instagram_username]"
            ref={register()}
            type="text"
          />
        </FormGroup>
      </div>
    </div>
  </div>
);

export default StepFour;
