import React from 'react';
// import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
// import { Redirect, Route } from 'react-router-dom';
// import routes from '../../routes';
// import { getIsAuthenticated } from '../redux/auth';

export const PrivateRoute = ({ children, isAuthenticated, ...routeProps }) => {
  // const isLogIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {/* {isLogIn ? children : <Redirect to={routes.logIn} />} */}
      {children}
    </Route>
  );
};

export default PrivateRoute;
