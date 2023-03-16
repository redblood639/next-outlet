import React from "react";

import Input from "@/components/input";
// styled componoent
import {
  AccountWrapper,
  DetailContent,
  DetailWrapper,
  MenuWrapper,
} from "@/pages/admin/accounts/accounts.styled";
// icons
import SearhIcon from "@/assets/svgs/search";
import Button from "@/components/button";
import Label from "@/components/label";

const AccountPage: React.FC = () => {
  return (
    <AccountWrapper>
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
        <DetailContent>{/* Content */}</DetailContent>
      </DetailWrapper>
    </AccountWrapper>
  );
};

export default AccountPage;
