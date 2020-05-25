import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

import addNamespace from 'helpers/addNamespace';
import FormInput from 'components/UI/FormInput';
import FormSelect from 'components/UI/FormSelect';
import FormTextArea from 'components/UI/FormTextArea';

interface Props {
  data?: object;
  namespace?: string;
}

const CustomerForm: React.FC<Props> = ({ data, namespace }) => {
  const { errors, register } = useFormContext();

  return (
    <Fragment>
      <Row>
        <Col>
          <FormInput
            data={data}
            errors={errors}
            label="Customer Name"
            name={addNamespace('name', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>

        <Col>
          <FormSelect
            data={data}
            errors={errors}
            label="Customer Type"
            name={addNamespace('customer_type', namespace)}
            ref={register({ required: 'Required' })}
            options={[{ value: 'business', label: 'Business' }]}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormTextArea
            data={data}
            errors={errors}
            label="Description"
            name={addNamespace('description', namespace)}
            ref={register()}
            rows={3}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default CustomerForm;
