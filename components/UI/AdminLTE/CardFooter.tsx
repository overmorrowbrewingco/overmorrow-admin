import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const CardFooter: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={cx('card-footer', className)} {...props}>
    {children}
  </div>
);

export default CardFooter;
