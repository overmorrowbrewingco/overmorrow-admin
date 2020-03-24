import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const CardBody: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={cx('card-body', className)} {...props}>
    {children}
  </div>
);

export default CardBody;
