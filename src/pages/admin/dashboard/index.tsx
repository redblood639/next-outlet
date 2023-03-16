import React from "react";

import {
  DashBoardWrapper,
  DetailContent,
  DetailWrapper,
  MenuWrapper,
} from "@/pages/admin/dashboard/dashboard.styled";

export const DashboardPage: React.FC = () => {
  return (
    <DashBoardWrapper>
      <MenuWrapper></MenuWrapper>
      <DetailWrapper>
        <DetailContent />
      </DetailWrapper>
    </DashBoardWrapper>
  );
};

export default DashboardPage;
