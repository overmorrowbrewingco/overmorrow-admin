import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const Content: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={cx('content', className)} {...props}>
    {children}
  </div>
);

export default Content;
