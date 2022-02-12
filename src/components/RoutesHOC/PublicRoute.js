import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth';

import routes from '../../routes';
export const PublicRoute = ({ isAuthenticated, children, ...routeProps }) => {
  const isLogIn = useSelector(getIsAuthenticated);
  return (
    <Route {...routeProps}>
      {isLogIn && routeProps.restricted ? (
        <Redirect to={routes.home} />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
