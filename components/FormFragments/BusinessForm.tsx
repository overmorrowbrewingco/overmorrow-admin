import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

import addNamespace from 'helpers/addNamespace';
import FormInput from 'components/UI/FormInput';
import FormSelect from 'components/UI/FormSelect';
import { Customer } from 'types';

interface Props {
  customer?: Customer;
  data?: object;
  namespace?: string;
}

const BusinessForm: React.FC<Props> = ({ customer, data, namespace }) => {
  const { errors, register } = useFormContext();

  return (
    <Fragment>
      <Row>
        <Col xs="6">
          <FormSelect
            data={data}
            errors={errors}
            label="Account Status"
            name={addNamespace('account_status', namespace)}
            ref={register({ required: 'Required' })}
            options={[
              { value: 'potential', label: 'Potential' },
              { value: 'pending', label: 'Pending' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <h5>Contact Information</h5>
          <small className="form-text mb-3 text-muted">
            These details should be general contact information for the business
            itself that we can display publicly for our customers. For any
            individual person working at this business, please create a contact.
          </small>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            autoComplete="url"
            data={data}
            errors={errors}
            label="Website"
            name={addNamespace('website', namespace)}
            ref={register()}
            type="url"
          />
        </Col>

        <Col>
          <FormInput
            autoComplete="tel"
            data={data}
            errors={errors}
            label="Phone Number"
            name={addNamespace('phone_number', namespace)}
            ref={register()}
            type="tel"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            autoComplete="email"
            data={data}
            errors={errors}
            label="Email"
            name={addNamespace('email', namespace)}
            ref={register()}
            type="email"
          />
        </Col>

        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Facebook Username"
            name={addNamespace('facebook_username', namespace)}
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
            label="Instagram Username"
            name={addNamespace('instagram_username', namespace)}
            ref={register()}
            type="text"
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default BusinessForm;
