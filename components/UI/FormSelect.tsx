import React, { HTMLProps } from 'react';
import cx from 'classnames';
import { get } from 'lodash';

import FormGroup from './FormGroup';

type Option = {
  value: number | string | string[];
  label: string;
};

// FIXME: This Props interface should be inheriting from the
// HTMLSelectElement fields, but as I'm just picking TypeScript
// back up I have been unable to get that working so far.
interface Props {
  className?: string;
  data?: object;
  errors?: object;
  info?: string;
  label?: string;
  name: string;
  options: Option[];
  ref?: React.RefObject<HTMLSelectElement>;
}

const FormSelect: React.FC<Props> = React.forwardRef(
  (
    { className, data, errors, info, label, name, options = [], ...props },
    ref?,
  ) => (
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
