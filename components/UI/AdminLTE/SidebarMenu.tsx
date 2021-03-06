import React from 'react';

const SidebarMenu: React.FC = ({ children }) => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column">{children}</ul>
  </nav>
);

export default SidebarMenu;
