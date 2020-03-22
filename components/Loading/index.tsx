import React from 'react';
import cx from 'classnames';

import './Loading.scss';

interface Props {
  className?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<Props> = ({ className, fullScreen = true }) =>
  fullScreen ? (
    <div className="wrapper">
      <div className={cx(className, 'Loading Loading--full-screen')}>
        <div className="spinner">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  ) : (
    <div className={cx(className, 'Loading')}>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );

export default Loading;
