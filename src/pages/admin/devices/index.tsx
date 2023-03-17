import React from "react";

import {
  DeviceWrapper,
  DetailContent,
  DetailWrapper,
  MenuWrapper,
  MenuContent,
  MenuItem,
} from "@/pages/admin/devices/devices.styled";
import Input from "@/components/input";
import SearhIcon from "@/assets/svgs/search";
import Button from "@/components/button";
import Label from "@/components/label";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { getDevices } from "@/assets/test_data";

type MenuItemType = {
  index: number;
  label: string;
  [key: string]: any;
};

export async function loader() {
  const accounts = await getDevices();
  return accounts;
}

const MenuItemNode: React.FC<MenuItemType> = ({ index, label, ...props }) => {
  return (
    <MenuItem onClick={() => props.navigate(`/admin/devices/${index}`)}>
      <Label
        fontSize={30}
        fontWeight={700}
        lineHeight={36}
        fontColor={
          `/admin/devices/${index}` === props.location.pathname
            ? "#ffffff"
            : "#B3B6BB"
        }
      >
        {label}
      </Label>
    </MenuItem>
  );
};

const DevicePage: React.FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const accounts: any = useLoaderData();

  return (
    <DeviceWrapper>
      <MenuWrapper>
        <Input
          type="text"
          width={"100%"}
          height={55}
          borderColor={"# "}
          hoverColor={"#1F2737"}
          background={"#1F2737"}
          fontColor={"#A19B9B"}
          borderRadius={10}
          placeholder="Search Items ..."
          icon={<SearhIcon />}
        />
        <MenuContent>
          {accounts.map((element: MenuItemType) => (
            <MenuItemNode
              key={`devices-${element.index}`}
              {...element}
              location={location}
              navigate={navigate}
            />
          ))}
        </MenuContent>
        <Button
          width={"100%"}
          height={55}
          background={"#379E2E"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          borderRadius={10}
        >
          <Label fontSize={22} lineHeight={27} fontColor={"white"}>
            New Device
          </Label>
        </Button>
      </MenuWrapper>
      <DetailWrapper>
        <DetailContent>
          <Outlet />
        </DetailContent>
      </DetailWrapper>
    </DeviceWrapper>
  );
};

export default DevicePage;
