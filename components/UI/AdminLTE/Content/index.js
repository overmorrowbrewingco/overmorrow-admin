import React from 'react';

import Link from 'next/link';

const Content = ({ breadcrumbs = [], children, title, titleButton }) => (
  <div className="content-wrapper" style={{ minHeight: '100vh' }}>
    <div className="content-header pt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">{title}</h1>
          </div>

          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {breadcrumbs.map((bc, index) => (
                <li
                  className={
                    index < breadcrumbs.length - 1
                      ? 'breadcrumb-item'
                      : 'breadcrumb-item active'
                  }
                  key={index}
                >
                  {index < breadcrumbs.length - 1 ? (
                    <Link as={bc.as} href={bc.href}>
                      <a href={bc.href}>{bc.title}</a>
                    </Link>
                  ) : (
                    <span>{bc.title}</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div className="content">
      <div className="container-fluid">{children}</div>
    </div>
  </div>
);

export default Content;
