import React from 'react';
import { Navigate, useNavigate } from 'react-router';
const PrivateRoute = ({ children }) => {
  // Authentication Control
  const navigate = useNavigate();

  if (true) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
