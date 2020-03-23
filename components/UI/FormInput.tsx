import React from 'react';
import cx from 'classnames';
import { get } from 'lodash';

import FormGroup from './FormGroup';

// FIXME: This Props interface should be inheriting from the
// HTMLInputElement fields, but as I'm just picking TypeScript
// back up I have been unable to get that working so far.
interface Props {
  autoComplete?: string;
  className?: string;
  data?: object;
  disabled?: boolean;
  errors?: object;
  info?: string;
  label?: string;
  name: string;
  ref?: React.RefObject<HTMLInputElement>;
  type?: string;
}

const FormInput: React.FC<Props> = React.forwardRef(
  ({ className, data, errors, info, label, name, ...props }, ref?) => (
    <FormGroup
      data={data}
      errors={errors}
      info={info}
      label={label}
      name={name}
    >
      <input
        className={cx('form-control', className)}
        defaultValue={get(data, name)}
        ref={ref}
        name={name}
        {...props}
      />
    </FormGroup>
  ),
);

export default FormInput;
