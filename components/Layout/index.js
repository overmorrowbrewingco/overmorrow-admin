import React from 'react';

import Sidebar from '~/components/UI/AdminLTE/Sidebar';
import SidebarMenu from '~/components/UI/AdminLTE/SidebarMenu';
import SidebarMenuNavLink from '~/components/UI/AdminLTE/SidebarMenuNavLink';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Sidebar>
      <SidebarMenu>
        <SidebarMenuNavLink href="/">Home</SidebarMenuNavLink>
        <SidebarMenuNavLink href="/products">Products</SidebarMenuNavLink>
        <SidebarMenuNavLink href="/customers">Customers</SidebarMenuNavLink>
        <SidebarMenuNavLink href="/website-content">
          Website Content
        </SidebarMenuNavLink>
      </SidebarMenu>
    </Sidebar>

    {children}
  </div>
);

export default Layout;
