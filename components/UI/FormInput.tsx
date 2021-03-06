import React from 'react';
import cx from 'classnames';
import { get } from 'lodash';

import FormGroup from './FormGroup';

interface Props {
  className?: string;
  data?: object;
  errors?: object;
  info?: string;
  label?: string;
  name: string;
}

type FormInputProps = React.ComponentPropsWithoutRef<'input'> & Props;

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
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
