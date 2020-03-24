import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = ({ children }) => (
  <aside
    className="main-sidebar sidebar-dark-primary elevation-4"
    style={{ minHeight: '100vh' }}
  >
    <Link href="/">
      <a className="brand-link" href="/">
        <span className="brand-text font-weight-light">Overmorrow</span>
      </a>
    </Link>

    <section className="sidebar">{children}</section>
  </aside>
);

export default Sidebar;
