import React from 'react';

import { useAuth0 } from '~/hooks/useAuth0';

const Login = () => {
  const { loginWithPopup } = useAuth0();

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <img
            alt="Overmorrow logo"
            src="/overmorrow-logo-horizontal-small.png"
            className="img-fluid"
          />
        </div>

        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <div className="text-center">
            <button
              className="btn btn-primary btn-block"
              onClick={loginWithPopup}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
