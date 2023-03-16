import React from "react";

import {
  DeviceWrapper,
  DetailContent,
  DetailWrapper,
  MenuWrapper,
} from "@/pages/admin/devices/devices.styled";
import Input from "@/components/input";
import SearhIcon from "@/assets/svgs/search";
import Button from "@/components/button";
import Label from "@/components/label";

const DevicePage: React.FC = () => {
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
        <DetailContent>{/* Content */}</DetailContent>
      </DetailWrapper>
    </DeviceWrapper>
  );
};

export default DevicePage;
