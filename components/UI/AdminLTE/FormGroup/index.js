import React, { Children } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const FormGroup = ({ children, error, name, label, ...props }) => {
  const child = Children.only(children);

  let className = child.props.className || '';

  if (error) {
    className = `${className} is-invalid`.trim();
  }

  return (
    <div className="form-group">
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

      {React.cloneElement(child, { className })}

      {error && error.message && (
        <small className="form-text mb-3 text-danger text-right">
          {error.message}
        </small>
      )}
    </div>
  );
};

FormGroup.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default FormGroup;
