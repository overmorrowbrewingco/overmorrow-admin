import React from 'react';
import cx from 'classnames';

import './Loading.scss';

const Loading = ({ className, fullScreen = true }) =>
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
