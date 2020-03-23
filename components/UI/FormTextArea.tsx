import React from 'react';
import cx from 'classnames';
import { get } from 'lodash';

import FormGroup from './FormGroup';

// FIXME: This Props interface should be inheriting from the
// HTMLTextAreaElement fields, but as I'm just picking TypeScript
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
  ref?: React.RefObject<HTMLTextAreaElement>;
  rows?: number;
  type?: string;
}

const FormTextArea: React.FC<Props> = React.forwardRef(
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
