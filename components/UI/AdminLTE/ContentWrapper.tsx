import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const ContentWrapper: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={cx('content-wrapper', className)} {...props}>
    {children}
  </div>
);

export default ContentWrapper;
