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

type FormTextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & Props;

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ className, data, errors, info, label, name, ...props }, ref?) => (
    <FormGroup
      data={data}
      errors={errors}
      info={info}
      label={label}
      name={name}
    >
      <textarea
        className={cx('form-control', className)}
        defaultValue={get(data, name)}
        name={name}
        ref={ref}
        {...props}
      />
    </FormGroup>
  ),
);

export default FormTextArea;
