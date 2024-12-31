import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.auth);

  if (!auth) {
    return <Navigate to="/auth" />;
  }

  return children; // Render the child components if the user is authenticated
};

export default ProtectedRoute;