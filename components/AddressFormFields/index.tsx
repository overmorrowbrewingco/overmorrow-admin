import React from 'react';
import { get } from 'lodash';

import AddressInput from 'components/AddressInput';
import FormGroup from 'components/UI/FormGroup';
import FormInput from 'components/UI/FormInput';
import FormTextArea from 'components/UI/FormTextArea';

interface Props {
  data?: object;
  errors?: object;
  namespace: string;
  register: Function;
  setValue: Function;
}

const AddressFormFields: React.FC<Props> = ({
  data,
  errors,
  namespace = '',
  register,
  setValue,
}) => {
  const onAddressSelect = (d): void => {
    const createValueMap = (fields = []): object =>
      fields.map((field) => ({
        [`${namespace}[${field}]`]: get(d, field) || null,
      }));

    setValue(
      createValueMap([
        'city',
        'district',
        'formatted',
        'html',
        'latitude',
        'longitude',
      ]),
    );
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
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
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="Full Address"
            name={`${namespace}[formatted]`}
            ref={register({ required: true })}
            type="text"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <FormTextArea
            data={data}
            disabled
            errors={errors}
            label="Address (HTML)"
            name={`${namespace}[html]`}
            ref={register({ required: true })}
            rows={3}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="District"
            name={`${namespace}[district]`}
            ref={register()}
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="City"
            name={`${namespace}[city]`}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="Latitude"
            name={`${namespace}[latitude]`}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <FormInput
            data={data}
            disabled
            errors={errors}
            label="Longitude"
            name={`${namespace}[longitude]`}
            ref={register({
              required: 'Required',
            })}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressFormFields;
