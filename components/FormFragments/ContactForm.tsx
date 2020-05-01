import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { get } from 'lodash';
import { useFormContext } from 'react-hook-form';

import addNamespace from 'helpers/addNamespace';
import { Business } from 'types';

import FormInput from 'components/UI/FormInput';
import FormSelect from 'components/UI/FormSelect';

interface Props {
  business?: Business;
  data?: object;
  namespace?: string;
}

const ContactForm: React.FC<Props> = ({ business, data, namespace }) => {
  const { errors, register } = useFormContext();

  return (
    <Fragment>
      <Row>
        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Primary"
            name={addNamespace('primary', namespace)}
            ref={register()}
            type="checkbox"
          />
        </Col>

        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Active"
            name={addNamespace('active', namespace)}
            ref={register()}
            type="checkbox"
          />
        </Col>

        {get(business, 'locations', []).length > 0 && (
          <Col>
            <FormSelect
              data={data}
              errors={errors}
              label="Affiliated Location"
              name={addNamespace('business_location_id', namespace)}
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
            data={data}
            errors={errors}
            label="Full Name"
            name={addNamespace('full_name', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>

        <Col>
          <FormInput
            autoComplete="nickname"
            data={data}
            errors={errors}
            label="Preferred Name"
            name={addNamespace('preferred_name', namespace)}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Title"
            name={addNamespace('title', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>

        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Gender"
            name={addNamespace('gender', namespace)}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormSelect
            data={data}
            errors={errors}
            label="Preferred Language"
            name={addNamespace('preferred_language', namespace)}
            options={[
              { label: 'English', value: 'english' },
              { label: 'Vietnamese', value: 'vietnamese' },
            ]}
            ref={register()}
          />
        </Col>

        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Preferred Communication Method"
            name={addNamespace('preferred_communication_method', namespace)}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <div className="col-sm-6">
          <FormInput
            data={data}
            errors={errors}
            label="Email"
            name={addNamespace('email', namespace)}
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
            name={addNamespace('phone_number', namespace)}
            ref={register()}
            type="tel"
          />
        </div>
      </Row>

      <Row>
        <div className="col-sm-6">
          <FormInput
            data={data}
            errors={errors}
            label="Facebook Username"
            name={addNamespace('facebook_username', namespace)}
            ref={register()}
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <FormInput
            data={data}
            errors={errors}
            label="Instagram Username"
            name={addNamespace('instagram_username', namespace)}
            ref={register()}
            type="text"
          />
        </div>
      </Row>
    </Fragment>
  );
};

export default ContactForm;
