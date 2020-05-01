import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

import AddressForm from 'components/FormFragments/AddressForm';
import addNamespace from 'helpers/addNamespace';
import { Business } from 'types';
import FormInput from 'components/UI/FormInput';
import FormTextArea from 'components/UI/FormTextArea';

interface Props {
  business?: Business;
  data?: object;
  namespace?: string;
}

const BusinessLocationForm: React.FC<Props> = ({ data, namespace }) => {
  const { errors, register } = useFormContext();

  return (
    <Fragment>
      <Row>
        <Col>
          <FormInput
            data={data}
            errors={errors}
            info='A name to distinguish this location from others. Can be something simple like "Hoan Kiem Taproom"'
            label="Location Name"
            name={addNamespace('name', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
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
            rows={2}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddressForm
            data={data}
            namespace={addNamespace('[address][data]', namespace)}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default BusinessLocationForm;
