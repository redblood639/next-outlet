import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// components
import Label from "@/components/label";
// styled components
import {
  AdminWrapper,
  UserInfoWrapper,
  MenuContent,
  ModalWrapper,
  ModalMenu,
  MenuItem,
} from "@/pages/admin/admin.styled";
// Icons
import LogoutIcon from "@/assets/svgs/logout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signOutUser, loadUser } from "@/store/slices/authSlice";

const AdminPage: React.FC = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authentication);

  const [modalMenu, setModalMenu] = useState<boolean>(false);

  const handleSignOut = () => {
    dispatch(signOutUser());
    navigate("/");
  };

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (location.pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  }, [location, navigate]);

  return (
    <AdminWrapper>
      <MenuContent>
        <Label
          fontWeight={700}
          fontSize={30}
          lineHeight={36}
          display="block"
          padding="0 35px"
        >
          LOGO
        </Label>

        <UserInfoWrapper onClick={() => setModalMenu(true)}>
          {user}
        </UserInfoWrapper>
      </MenuContent>

      {/* modal */}
      <ModalWrapper modalMenu={modalMenu} onClick={() => setModalMenu(false)}>
        <ModalMenu>
          <MenuItem onClick={handleSignOut}>
            <LogoutIcon />
            <Label
              fontColor={"#007DF8"}
              fontWeight={600}
              fontSize={18}
              lineHeight={26}
            >
              Sign Out
            </Label>
          </MenuItem>
        </ModalMenu>
      </ModalWrapper>

      {/* Main Content */}
      <Outlet />
    </AdminWrapper>
  );
};

export default AdminPage;
