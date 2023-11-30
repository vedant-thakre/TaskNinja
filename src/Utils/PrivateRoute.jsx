import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useApp } from '../Context/AppContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useApp();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
