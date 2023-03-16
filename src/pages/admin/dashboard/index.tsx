import React, { useState } from "react";

import {
  DashBoardWrapper,
  DetailContent,
  DetailWrapper,
  MenuWrapper,
  MenuItem,
} from "@/pages/admin/dashboard/dashboard.styled";
import Label from "@/components/label";

type MenuItemType = {
  index: number;
  label: string;
  [key: string]: any;
};

const menudata: MenuItemType[] = [
  { index: 1, label: "Betting Promotion", selected: 0 },
  { index: 2, label: "Bonus Bets", selected: 0 },
  { index: 3, label: "Gub Status", selected: 0 },
];

const MenuItemNode: React.FC<MenuItemType> = ({ index, label, ...props }) => {
  return (
    <MenuItem onClick={() => props.setSelected(index)}>
      <Label
        fontSize={30}
        fontWeight={700}
        lineHeight={36}
        fontColor={index === props.selected ? "#ffffff" : "#B3B6BB"}
      >
        {label}
      </Label>
    </MenuItem>
  );
};

export const DashboardPage: React.FC = () => {
  const [selected, setSelected] = useState<number>(1);

  return (
    <DashBoardWrapper>
      <MenuWrapper>
        {menudata.map((element: MenuItemType) => (
          <MenuItemNode
            key={`menudata-${element.index}`}
            {...element}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </MenuWrapper>
      <DetailWrapper>
        <DetailContent>{/* Content */}</DetailContent>
      </DetailWrapper>
    </DashBoardWrapper>
  );
};

export default DashboardPage;
