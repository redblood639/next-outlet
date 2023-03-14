import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// styled components
import { AdminWrapper, MenuContent } from "@/pages/admin/admin.styled";

const AdminPage: React.FC = () => {
  let location = useLocation();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  }, [location]);

  return (
    <AdminWrapper>
      <MenuContent>Admin Menu</MenuContent>
      <Outlet />
    </AdminWrapper>
  );
};

export default AdminPage;
