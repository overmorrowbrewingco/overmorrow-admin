import React from 'react';
import cx from 'classnames';
import { get } from 'lodash';

import FormGroup from './FormGroup';

interface Props {
  data?: {};
  errors?: {};
  info?: string;
  label?: string;
  name: string;
}

const FormSelect = React.forwardRef(
  (
    { className, data, errors, info, label, name, options = [], ...props },
    ref,
  ): React.FC<Props> => (
    <FormGroup
      data={data}
      errors={errors}
      info={info}
      label={label}
      name={name}
    >
      <select
        className={cx('form-control', className)}
        defaultValue={get(data, name)}
        ref={ref}
        name={name}
        {...props}
      >
        <option value="" />
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FormGroup>
  ),
);

export default FormSelect;
