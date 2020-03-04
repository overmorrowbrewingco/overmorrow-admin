import React from 'react';

const Content = ({ children, title, titleButton }) => (
  <div className="content-wrapper" style={{ minHeight: '100vh' }}>
    <div className="content-header pt-2">
      <div className="container-fluid">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">{title}</h1>
        </div>
      </div>

      {title && (
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-10">
              <h1 className="m-0 text-dark">{title}</h1>
            </div>
            <div className="col-sm-2 text-right text-muted">
              {titleButton && titleButton}
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="content">
      <div className="container-fluid">{children}</div>
    </div>
  </div>
);

export default Content;
