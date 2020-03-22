import React, { useState } from 'react';
import cx from 'classnames';
import { ApolloProvider } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import createClient from 'graphql/createClient';
import CurrentUserWrapper from 'components/CurrentUserWrapper';
import Loading from 'components/Loading';
import Header from 'components/UI/AdminLTE/Header';
import Sidebar from 'components/UI/AdminLTE/Sidebar';
import SidebarMenu from 'components/UI/AdminLTE/SidebarMenu';
import SidebarMenuNavLink from 'components/UI/AdminLTE/SidebarMenuNavLink';
import UserPanel from 'components/UserPanel';
import { useAuth0 } from 'hooks/useAuth0';

const LoggedInLayout: React.FC = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [token, setToken] = useState(null);
  const auth = useAuth0();
  const router = useRouter();
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
    return null;
  }

  const toggleSidebar = (): void => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <ApolloProvider client={createClient(logout, token)}>
      <CurrentUserWrapper>
        <div
          className={cx('sidebar-mini', 'wrapper', {
            'sidebar-collapse': sidebarCollapsed,
          })}
        >
          <Header toggleSidebar={toggleSidebar} />

          <Sidebar>
            <UserPanel />

            <SidebarMenu>
              <SidebarMenuNavLink href="/">Home</SidebarMenuNavLink>
              <SidebarMenuNavLink href="/customers">
                Customers
              </SidebarMenuNavLink>
            </SidebarMenu>
          </Sidebar>

          {children}
        </div>
      </CurrentUserWrapper>
    </ApolloProvider>
  );
};
export default LoggedInLayout;
