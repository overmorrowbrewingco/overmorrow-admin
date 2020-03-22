import React from 'react';
import Link from 'next/link';

import BusinessCustomers from './Business';

const Customers = (): React.FC => (
  <div className="Customers">
    <div className="row">
      <div className="col-sm-12">
        <BusinessCustomers />
      </div>
    </div>

    <div className="row justify-content-end">
      <nav className="navbar navbar-expand">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/customers/new/business">
              <a
                className="btn btn-dark mr-2 nav-link"
                href="/customers/new/business"
              >
                <i className="fa fa-plus nav-icon" /> Create Business
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Customers;
