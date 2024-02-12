import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Context from "../contexts/ContextWrapper";

const RequireAuth = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  let token = user.token;
  if (location.pathname === "/login" || location.pathname === "/register")
    return token ? <Navigate to="/" replace /> : <Outlet />;
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
