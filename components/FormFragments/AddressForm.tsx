import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FieldValues, useFormContext } from 'react-hook-form';
import { get } from 'lodash';

import addNamespace from 'helpers/addNamespace';
import AddressInput from 'components/AddressInput';
import FormGroup from 'components/UI/FormGroup';
import FormInput from 'components/UI/FormInput';
import FormTextArea from 'components/UI/FormTextArea';

interface Props {
  data?: object;
  namespace: string;
}

const AddressForm: React.FC<Props> = ({ data = {}, namespace }) => {
  const { errors, register, setValue } = useFormContext();

  const onAddressSelect = (d): void => {
    const createValueMap = (fields = []): FieldValues[] =>
      fields.map((field) => ({
        [namespace ? `${namespace}[${field}]` : field]: get(d, field) || null,
      }));

    const values = createValueMap([
      'city',
      'district',
      'formatted',
      'html',
      'latitude',
      'longitude',
    ]);

    setValue(values);
  };

  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup
            data={data}
            errors={errors}
            label="Address"
            info="Select an address from the autocomplete input to populate the fields below."
            name="address_autocomplete"
          >
            <AddressInput
              name="address_autocomplete"
              onSelect={onAddressSelect}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="Full Address"
            name={addNamespace('formatted', namespace)}
            ref={register({ required: true })}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormTextArea
            data={data}
            disabled
            errors={errors}
            label="Address (HTML)"
            name={addNamespace('html', namespace)}
            ref={register({ required: true })}
            rows={3}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="District"
            name={addNamespace('district', namespace)}
            ref={register()}
            type="text"
          />
        </Col>

        <Col>
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="City"
            name={addNamespace('city', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="Latitude"
            name={addNamespace('latitude', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>

        <Col>
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="Longitude"
            name={addNamespace('longitude', namespace)}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default AddressForm;
