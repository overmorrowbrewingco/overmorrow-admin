import React, { Children } from 'react';
import cx from 'classnames';
import { get } from 'lodash';

interface Props {
  data?: {};
  errors?: {};
  info?: string;
  label?: string;
  name: string;
}

const FormGroup: React.FC<Props> = ({
  children,
  data,
  errors,
  info,
  label,
  name,
  ...props
}) => {
  const child = Children.only(children);

  const error = get(errors, name);

  let className = child.props.className || '';

  if (error) {
    className = `${className} is-invalid`.trim();
  }

  return (
    <div className="form-group position-relative">
      {label && (
        <label
          className={cx('form-label', {
            'text-danger': !!error,
          })}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      {info && <small className="form-text mb-3 text-muted">{info}</small>}

      {React.cloneElement(child, { className })}

      {error && error.message && (
        <small
          className="form-text mb-3 position-absolute text-danger text-right"
          style={{ right: 0 }}
        >
          {error.message}
        </small>
      )}
    </div>
  );
};

export default FormGroup;
