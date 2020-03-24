import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const CardBody: React.FC<Props> = ({ children, className, ...props }) => (
  <h3 className={cx('card-title', className)} {...props}>
    {children}
  </h3>
);

export default CardBody;
