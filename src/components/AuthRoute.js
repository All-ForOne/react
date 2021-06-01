import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from 'lib/AuthenticationService'

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          render ? render(props) : <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signIn', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
