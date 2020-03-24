import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const CardHeader: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={cx('card-header', className)} {...props}>
    {children}
  </div>
);

export default CardHeader;
