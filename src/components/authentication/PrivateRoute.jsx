import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "context";

const PrivateRoute = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
  <Outlet/>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
