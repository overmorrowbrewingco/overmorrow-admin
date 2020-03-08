import React from 'react';
import cx from 'classnames';

const Input = ({ className, ...props }) => (
  <input className={cx('form-control', className)} {...props} />
);

export default Input;
