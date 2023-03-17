import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, children }: any) => {
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
