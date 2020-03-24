import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
  primary?: boolean;
}

const Card: React.FC<Props> = ({ children, className, primary, ...props }) => (
  <div
    className={cx('card', className, {
      'card-primary': primary,
    })}
    {...props}
  >
    {children}
  </div>
);

export default Card;
