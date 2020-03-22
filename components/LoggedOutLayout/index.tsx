import React from 'react';
import { useRouter } from 'next/router';

import Loading from 'components/Loading';
import { useAuth0 } from 'hooks/useAuth0';

const LoggedOutLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  return <div className="wrapper">{children}</div>;
};

export default LoggedOutLayout;
