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

const FormTextArea = React.forwardRef(
  (
    { className, data, errors, info, label, name, ...props },
    ref,
  ): React.FC<Props> => (
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
        ref={ref}
        name={name}
        {...props}
      />
    </FormGroup>
  ),
);

export default FormTextArea;
