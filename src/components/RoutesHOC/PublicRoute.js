import React from 'react';
// import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
// import { Redirect, Route } from 'react-router-dom';
// import { getIsAuthenticated } from '../redux/auth';

export const PublicRoute = ({ isAuthenticated, children, ...routeProps }) => {
  // const isLogIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {/* {isLogIn && routeProps.restricted ? (
        <Redirect to={routes.contacts} />
      ) : (
        children
      )} */}
      {children}
    </Route>
  );
};

export default PublicRoute;
