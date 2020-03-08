import React, { Children } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const FormGroup = ({ children, error, info, name, label, ...props }) => {
  const child = Children.only(children);

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

FormGroup.propTypes = {
  className: PropTypes.string,
  info: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default FormGroup;
