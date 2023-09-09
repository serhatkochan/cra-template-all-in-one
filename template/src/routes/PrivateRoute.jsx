import React from 'react';
import { Navigate } from 'react-router';
const PrivateRoute = ({ children }) => {
  // Authentication Control
  if (true) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
