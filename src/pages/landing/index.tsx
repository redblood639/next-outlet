import React from "react";
import { Outlet } from "react-router-dom";
// styled components
import { BgImage, LandingWrapper } from "@/pages/landing/landing.styled";

const LandingPage: React.FC = () => {
  return (
    <LandingWrapper>
      <BgImage />
      <Outlet />
    </LandingWrapper>
  );
};

export default LandingPage;
