import React from 'react';

import Header from '../UI/AdminLTE/Header';
import Sidebar from '../UI/AdminLTE/Sidebar';
import SidebarMenu from '../UI/AdminLTE/SidebarMenu';
import SidebarMenuNavLink from '../UI/AdminLTE/SidebarMenuNavLink';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />

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

    <div className="content-wrapper">{children}</div>
  </div>
);

export default Layout;
