import React from 'react';
import { useRouter } from 'next/router';

import LoggedInLayout from '~/components/LoggedInLayout';
import LoggedOutLayout from '~/components/LoggedOutLayout';
import { Auth0Provider } from '~/hooks/useAuth0';
import { auth0ClientId, auth0Domain } from '~/config/env';

import '../styles/styles.scss';

const unprotectedRoutes = ['/login'];

const App = (props) => {
  const router = useRouter();
  const { Component, pageProps } = props;

  const redirectUrl = process.browser
    ? `${window.location.origin}/callback`
    : null;

  const onRedirectCallback = (appState) => {
    router.push(appState && appState.targetUrl ? appState.targetUrl : '/');
  };

  const isProtectedRoute = !unprotectedRoutes.includes(props.router.route);

  return (
    <Auth0Provider
      client_id={auth0ClientId}
      domain={auth0Domain}
      redirect_uri={redirectUrl}
      onRedirectCallback={onRedirectCallback}
    >
      {isProtectedRoute ? (
        <LoggedInLayout>
          <Component {...props} />
        </LoggedInLayout>
      ) : (
        <LoggedOutLayout>
          <Component {...pageProps} />
        </LoggedOutLayout>
      )}
    </Auth0Provider>
  );
};
export default App;
