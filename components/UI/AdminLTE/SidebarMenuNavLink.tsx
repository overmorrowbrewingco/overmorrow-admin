import React from 'react';
import { LinkProps } from 'next/link';

import ActiveLink from 'components/UI/ActiveLink';

const SidebarMenuNavLink: React.FC<LinkProps> = ({
  children,
  href,
  ...props
}) => (
  <li className="nav-item">
    <ActiveLink href={href} {...props}>
      <a className="nav-link">{children}</a>
    </ActiveLink>
  </li>
);

export default SidebarMenuNavLink;
