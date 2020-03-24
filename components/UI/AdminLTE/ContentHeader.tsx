import React from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
}

const ContentHeader: React.FC<Props> = ({ children, className, ...props }) => (
  <div className={cx('content-header', className)} {...props}>
    {children}
  </div>
);

export default ContentHeader;
