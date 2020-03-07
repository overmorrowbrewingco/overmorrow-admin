import React from 'react';

import { useAuth0 } from '~/hooks/useAuth0';

const Header = ({ children, toggleSidebar }) => {
  const { logout } = useAuth0();

  return (
    <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
      <ul className="navbar-nav">
        {/* eslint-disable-next-line */}
        <a href="#" className="nav-link" onClick={toggleSidebar} role="button">
          <i className="fa fa-bars" />
        </a>

        {/* eslint-disable-next-line */}
        <a href="#" className="nav-link" onClick={logout} role="button">
          <i className="fa fa-sign-out nav-icon" />
          <span> </span>Logout
        </a>
      </ul>
    </nav>
  );
};

export default Header;
