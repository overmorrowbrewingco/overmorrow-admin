import React from 'react';

import Input from '~/components/UI/AdminLTE/Input';
import FormInput from '~/components/UI/FormInput';
import FormSelect from '~/components/UI/FormSelect';

const CustomerNewStepFour = ({ data, errors, register }) => (
  <div className="CustomerNewStepFour card-body">
    <Input
      name="contacts[data][0][primary]"
      ref={register()}
      type="hidden"
      value={true}
    />

    <div className="row">
      <div className="col-sm-6">
        <FormInput
          autoComplete="name"
          data={data}
          errors={errors}
          label="Full Name"
          name="contacts[data][0][full_name]"
          ref={register({
            required: 'Required',
          })}
          type="text"
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          autoComplete="nickname"
          data={data}
          errors={errors}
          label="Preferred Name"
          name="contacts[data][0][preferred_name]"
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
          label="Title"
          name="contacts[data][0][title]"
          ref={register({
            required: 'Required',
          })}
          type="text"
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          data={data}
          errors={errors}
          label="Gender"
          name="contacts[data][0][gender]"
          ref={register()}
          type="text"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormSelect
          data={data}
          errors={errors}
          label="Preferred Language"
          name="contacts[data][0][preferred_language]"
          options={[
            { label: 'English', value: 'english' },
            { label: 'Vietnamese', value: 'vietnamese' },
          ]}
          ref={register()}
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          data={data}
          errors={errors}
          label="Preferred Communication Method"
          name="contacts[data][0][preferred_communication_method]"
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
          label="Email"
          name="contacts[data][0][email]"
          ref={register()}
          type="email"
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          autoComplete="email"
          data={data}
          errors={errors}
          label="Phone Number"
          name="contacts[data][0][phone_number]"
          ref={register()}
          type="tel"
        />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <FormInput
          data={data}
          errors={errors}
          label="Facebook Username"
          name="contacts[data][0][facebook_username]"
          ref={register()}
          type="text"
        />
      </div>

      <div className="col-sm-6">
        <FormInput
          data={data}
          errors={errors}
          label="Instagram Username"
          name="contacts[data][0][instagram_username]"
          ref={register()}
          type="text"
        />
      </div>
    </div>
  </div>
);

export default CustomerNewStepFour;
