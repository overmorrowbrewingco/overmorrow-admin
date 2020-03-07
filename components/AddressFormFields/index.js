import React from 'react';
import { get } from 'lodash';

import AddressInput from '~/components/AddressInput';
import FormGroup from '~/components/UI/AdminLTE/FormGroup';

const AddressFormFields = ({
  data,
  errors,
  namespace = '',
  register,
  setValue,
}) => {
  const onAddressSelect = (d) => {
    setValue([
      {
        [`${namespace}[address_full]`]: d.addressFull || null,
      },
      {
        [`${namespace}[address_html]`]: d.addressHtml || null,
      },
      {
        [`${namespace}[district]`]: d.district || null,
      },
      {
        [`${namespace}[city]`]: d.city || null,
      },
      {
        [`${namespace}[latitude]`]: d.location.lat || null,
      },
      {
        [`${namespace}[longitude]`]: d.location.lng || null,
      },
    ]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <FormGroup label="Address" name="address_full">
            <AddressInput
              name="address_autocomplete"
              onSelect={onAddressSelect}
            />
          </FormGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <small className="form-text mb-3 text-muted">
            Select an address from the autocomplete input to populate the fields
            below.
          </small>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <FormGroup
            error={get(errors, `${namespace}[address_full]`)}
            label="Full Address"
            name={`${namespace}[address_full]`}
          >
            <input
              className="form-control"
              defaultValue={get(data, `${namespace}[address_full]`)}
              disabled
              name={`${namespace}[address_full]`}
              ref={register({ required: true })}
              type="text"
            />
          </FormGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <FormGroup
            error={get(errors, `${namespace}[address_html]`)}
            label="Address in HTML"
            name={`${namespace}[address_html]`}
          >
            <textarea
              className="form-control"
              defaultValue={get(data, `${namespace}[address_html]`)}
              disabled
              name={`${namespace}[address_html]`}
              ref={register({ required: true })}
              rows={3}
            />
          </FormGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <FormGroup
            error={get(errors, `${namespace}[district]`)}
            label="District"
            name={`${namespace}[district]`}
          >
            <input
              autoComplete="address-level3"
              className="form-control"
              defaultValue={get(data, `${namespace}[district]`)}
              disabled
              name={`${namespace}[district]`}
              ref={register()}
              type="text"
            />
          </FormGroup>
        </div>

        <div className="col-sm-6">
          <FormGroup
            error={get(errors, `${namespace}[city]`)}
            label="City"
            name={`${namespace}[city]`}
          >
            <input
              className="form-control"
              defaultValue={get(data, `${namespace}[city]`)}
              disabled
              name={`${namespace}[city]`}
              ref={register({
                required: 'Required',
              })}
              type="text"
            />
          </FormGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <FormGroup
            error={get(errors, `${namespace}[latitude]`)}
            label="Latitude"
            name={`${namespace}[latitude]`}
          >
            <input
              className="form-control"
              defaultValue={get(data, `${namespace}[latitude]`)}
              disabled
              name={`${namespace}[latitude]`}
              ref={register({
                required: 'Required',
              })}
              type="text"
            />
          </FormGroup>
        </div>

        <div className="col-sm-6">
          <FormGroup
            error={get(errors, `${namespace}[longitude]`)}
            label="Longitude"
            name={`${namespace}[longitude]`}
          >
            <input
              className="form-control"
              defaultValue={get(data, `${namespace}[longitude]`)}
              disabled
              name={`${namespace}[longitude]`}
              ref={register({
                required: 'Required',
              })}
              type="text"
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddressFormFields;
