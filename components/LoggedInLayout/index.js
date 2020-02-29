import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import createClient from '~/apollo/createClient';
import Loading from '~/components/Loading';
import Sidebar from '~/components/UI/AdminLTE/Sidebar';
import SidebarMenu from '~/components/UI/AdminLTE/SidebarMenu';
import SidebarMenuNavLink from '~/components/UI/AdminLTE/SidebarMenuNavLink';
import UserPanel from '~/components/UserPanel';
import { useAuth0 } from '~/hooks/useAuth0';

const LoggedInLayout = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const auth = useAuth0();
  const { getIdTokenClaims, loading, logout, isAuthenticated } = auth;

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  getIdTokenClaims().then((response) => {
    if (!response || !response.__raw) {
      logout();
    } else {
      setToken(response.__raw);
    }
  });

  if (!token) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={createClient(token)}>
      <div className="wrapper">
        <Sidebar>
          <UserPanel />

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
    </ApolloProvider>
  );
};
export default LoggedInLayout;
