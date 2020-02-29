import React from 'react';

import ActiveLink from '../../ActiveLink';

const SidebarMenuNavLink = ({ children, ...props }) => (
  <li className="nav-item">
    <ActiveLink {...props}>
      <a className="nav-link" href={props.href}>
        {children}
      </a>
    </ActiveLink>
  </li>
);

export default SidebarMenuNavLink;
