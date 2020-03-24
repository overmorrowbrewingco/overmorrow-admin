import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { get } from 'lodash';
import { useFormContext } from 'react-hook-form';

import addNamespace from 'helpers/addNamespace';
import { Business } from 'types';

import FormInput from './FormInput';
import FormSelect from './FormSelect';

interface Props {
  business?: Business;
  namespace?: string;
  onSubmit?: Function;
  register?: Function;
}

const NewContactForm: React.FC<Props> = ({ business, namespace }) => {
  const { errors, register } = useFormContext();

  return (
    <Fragment>
      <Row>
        <Col>
          <FormInput
            errors={errors}
            label="Primary"
            name={addNamespace('primary')}
            ref={register()}
            type="checkbox"
          />
        </Col>

        <Col>
          <FormInput
            errors={errors}
            label="Active"
            name={addNamespace('active')}
            ref={register()}
            type="checkbox"
          />
        </Col>

        {get(business, 'locations', []).length > 0 && (
          <Col>
            <FormSelect
              errors={errors}
              label="Affiliated Location"
              name={addNamespace('business_location_id')}
              options={get(business, 'locations', []).map((location) => ({
                label: location.name,
                value: location.id,
              }))}
              ref={register()}
            />
          </Col>
        )}
      </Row>

      <Row>
        <Col>
          <FormInput
            autoComplete="name"
            errors={errors}
            label="Full Name"
            name={addNamespace('full_name')}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>

        <Col>
          <FormInput
            autoComplete="nickname"
            errors={errors}
            label="Preferred Name"
            name={addNamespace('preferred_name')}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            errors={errors}
            label="Title"
            name={addNamespace('title')}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>

        <Col>
          <FormInput
            errors={errors}
            label="Gender"
            name={addNamespace('gender')}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormSelect
            errors={errors}
            label="Preferred Language"
            name={addNamespace('preferred_language')}
            options={[
              { label: 'English', value: 'english' },
              { label: 'Vietnamese', value: 'vietnamese' },
            ]}
            ref={register()}
          />
        </Col>

        <Col>
          <FormInput
            errors={errors}
            label="Preferred Communication Method"
            name={addNamespace('preferred_communication_method')}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <div className="col-sm-6">
          <FormInput
            errors={errors}
            label="Email"
            name={addNamespace('email')}
            ref={register()}
            type="email"
          />
        </div>

        <div className="col-sm-6">
          <FormInput
            autoComplete="email"
            errors={errors}
            label="Phone Number"
            name={addNamespace('phone_number')}
            ref={register()}
            type="tel"
          />
        </div>
      </Row>

      <Row>
        <div className="col-sm-6">
          <FormInput
            errors={errors}
            label="Facebook Username"
            name={addNamespace('facebook_username')}
            ref={register()}
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <FormInput
            errors={errors}
            label="Instagram Username"
            name={addNamespace('instagram_username')}
            ref={register()}
            type="text"
          />
        </div>
      </Row>
    </Fragment>
  );
};

export default NewContactForm;
