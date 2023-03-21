import { isAuthenticated } from "../../services/authenticationService";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
