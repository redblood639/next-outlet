import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
// components
import Label from "@/components/label";
// styled components
import {
  AdminWrapper,
  MenuContent,
  MenuItems,
  MenuItem,
  UserAvatar,
  ModalWrapper,
  ModalMenu,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from "@/pages/admin/admin.styled";
// Icons
import DashBoardIcon from "@/assets/svgs/dashboard";
import AccountIcon from "@/assets/svgs/accounts";
import DeviceInfoIcon from "@/assets/svgs/deviceinfo";
import LogoutIcon from "@/assets/svgs/logout";
import RightArrowIcon from "@/assets/svgs/right-arrow";

const AdminPage: React.FC = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [modalMenu, setModalMenu] = useState<boolean>(false);

  React.useEffect(() => {
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
          padding="0 0 0 85px"
        >
          Admin Panel
        </Label>
        <MenuItems>
          <Link to={"/admin/dashboard"} style={{ textDecoration: "none" }}>
            <MenuItem>
              <DashBoardIcon />
              <Label
                fontWeight={700}
                fontSize={30}
                lineHeight={36}
                fontColor={
                  location.pathname === "/admin/dashboard" ? "#F24E1E" : "black"
                }
              >
                Dashboard
              </Label>
            </MenuItem>
          </Link>
          <Link to={"/admin/accounts"} style={{ textDecoration: "none" }}>
            <MenuItem>
              <AccountIcon />
              <Label
                fontWeight={700}
                fontSize={30}
                lineHeight={36}
                fontColor={
                  location.pathname === "/admin/accounts" ? "#699BF7" : "black"
                }
              >
                Account Management
              </Label>
            </MenuItem>
          </Link>
          <Link to={"/admin/devices"} style={{ textDecoration: "none" }}>
            <MenuItem>
              <DeviceInfoIcon />
              <Label
                fontWeight={700}
                fontSize={30}
                lineHeight={36}
                fontColor={
                  location.pathname === "/admin/devices" ? "#9747FF" : "black"
                }
              >
                Device Info
              </Label>
            </MenuItem>
          </Link>
        </MenuItems>
        <UserAvatar onClick={() => setModalMenu(true)} />
      </MenuContent>
      {/* modal */}
      <ModalWrapper modalMenu={modalMenu} onClick={() => setModalMenu(false)}>
        <ModalMenu>
          <ModalHeader>
            <UserAvatar />
            <Label fontSize={20} lineHeight={24}>
              example@gmail.com
            </Label>
          </ModalHeader>
          <ModalContent>
            <div>
              <Label fontSize={20} lineHeight={24}>
                Profile Setting
              </Label>
              <RightArrowIcon />
            </div>
          </ModalContent>
          <ModalFooter>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <div>
                <LogoutIcon />
                <Label
                  fontColor={"#007DF8"}
                  fontWeight={600}
                  fontSize={25}
                  lineHeight={26}
                >
                  Sign Out
                </Label>
              </div>
            </Link>
          </ModalFooter>
        </ModalMenu>
      </ModalWrapper>

      {/* Main Content */}
      <Outlet />
    </AdminWrapper>
  );
};

export default AdminPage;
