import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  if (!Component) return null;
  return (
    <Route {...rest} render={props =>
      localStorage.getItem('accessToken') ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login'/>
      )
    }
    />
  );
};
