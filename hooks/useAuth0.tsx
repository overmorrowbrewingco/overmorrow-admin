import React, { useContext, useEffect, useState } from 'react';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import createAuth0Client from '@auth0/auth0-spa-js';

export interface Auth0RedirectState {
  targetUrl?: string;
}

export type Auth0User = {
  sub?: string | number;
};

interface Auth0Context {
  getIdTokenClaims(o?: getIdTokenClaimsOptions): Promise<IdToken>;
  getTokenSilently(o?: GetTokenSilentlyOptions): Promise<string | undefined>;
  getTokenWithPopup(o?: GetTokenWithPopupOptions): Promise<string | undefined>;
  handleRedirectCallback(): Promise<RedirectLoginResult>;
  isAuthenticated: boolean;
  isInitializing: boolean;
  isPopupOpen: boolean;
  loading: boolean;
  loginWithPopup(o?: PopupLoginOptions): Promise<any>;
  loginWithRedirect(o?: RedirectLoginOptions): Promise<any>;
  logout(o?: LogoutOptions): void;
  user?: Auth0User;
}

export const Auth0Context = React.createContext<Auth0Context | null>(null);

export const useAuth0 = (): Auth0Context => useContext(Auth0Context);

interface Props {
  // For the Auth0ClientOptions see @auth0/auth0-spa-js/dist/typings/global
  authorizeTimeoutInSeconds?: number;
  client_id: string;
  domain: string;
  issuer?: string;
  leeway?: number;
  onRedirectCallback: Function;
  redirect_uri?: string;
}

export const Auth0Provider: React.FC<Props> = ({
  children,
  onRedirectCallback,
  ...initOptions
}) => {
  const [auth0Client, setAuth0Client] = useState<Auth0Client>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Auth0User>();

  useEffect(() => {
    const initAuth0 = async (): Promise<any> => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0Client(auth0FromHook);

      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };

    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (options?: PopupLoginOptions): Promise<any> => {
    setIsPopupOpen(true);

    try {
      await auth0Client.loginWithPopup(options);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPopupOpen(false);
    }

    const userProfile = await auth0Client.getUser();
    setUser(userProfile);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async (): Promise<any> => {
    setIsInitializing(true);

    const result = await auth0Client.handleRedirectCallback();
    const userProfile = await auth0Client.getUser();

    setIsInitializing(false);
    setIsAuthenticated(true);
    setUser(userProfile);

    return result;
  };

  const loginWithRedirect = (options?: RedirectLoginOptions): any =>
    auth0Client.loginWithRedirect(options);

  const getTokenSilently = (options?: GetTokenSilentlyOptions): any =>
    auth0Client.getTokenSilently(options);

  const logout = (options?: LogoutOptions): any => auth0Client.logout(options);

  const getIdTokenClaims = (options?: getIdTokenClaimsOptions): any =>
    auth0Client.getIdTokenClaims(options);

  const getTokenWithPopup = (options?: GetTokenWithPopupOptions): any =>
    auth0Client.getTokenWithPopup(options);

  return (
    <Auth0Context.Provider
      value={{
        getIdTokenClaims,
        getTokenSilently,
        getTokenWithPopup,
        handleRedirectCallback,
        isAuthenticated,
        isInitializing,
        isPopupOpen,
        loading,
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
