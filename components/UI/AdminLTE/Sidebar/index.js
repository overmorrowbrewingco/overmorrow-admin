import React from 'react';
import Link from 'next/link';

import childrenShape from '../../../../shapes/children';

const Sidebar = ({ children }) => (
  <aside
    className="main-sidebar sidebar-dark-primary elevation-4"
    style={{ minHeight: '100vh' }}
  >
    <Link href="/">
      <a className="brand-link" href="/">
        <span className="brand-text font-weight-light" href="/">
          Overmorrow
        </span>
      </a>
    </Link>

    <section className="sidebar">{children}</section>
  </aside>
);

Sidebar.propTypes = {
  children: childrenShape.isRequired,
};

export default Sidebar;
