import React from "react";

import Input from "@/components/input";
// styled componoent
import {
  AccountWrapper,
  DetailContent,
  DetailWrapper,
  MenuWrapper,
  MenuContent,
  MenuItem,
} from "@/pages/admin/accounts/accounts.styled";
// icons
import SearhIcon from "@/assets/svgs/search";
import Button from "@/components/button";
import Label from "@/components/label";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { getAccounts } from "@/assets/test_data";

type MenuItemType = {
  index: number;
  label: string;
  [key: string]: any;
};

export async function loader() {
  const accounts = await getAccounts();
  return accounts;
}

const MenuItemNode: React.FC<MenuItemType> = ({ index, label, ...props }) => {
  return (
    <MenuItem onClick={() => props.navigate(`/admin/accounts/${index}`)}>
      <Label
        fontSize={30}
        fontWeight={700}
        lineHeight={36}
        fontColor={
          `/admin/accounts/${index}` === props.location.pathname
            ? "#ffffff"
            : "#B3B6BB"
        }
      >
        {label}
      </Label>
    </MenuItem>
  );
};

const AccountPage: React.FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const accounts: any = useLoaderData();

  return (
    <AccountWrapper>
      <MenuWrapper>
        <Input
          type="text"
          width={"100%"}
          height={60}
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
              key={`accounts-${element.index}`}
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
            New Account
          </Label>
        </Button>
      </MenuWrapper>
      <DetailWrapper>
        <DetailContent>
          <Outlet />
        </DetailContent>
      </DetailWrapper>
    </AccountWrapper>
  );
};

export default AccountPage;
