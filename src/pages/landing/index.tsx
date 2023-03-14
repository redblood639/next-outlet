import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// styled components
import { BgImage, LandingWrapper } from "@/pages/landing/landing.styled";

const LandingPage: React.FC = () => {
  let location = useLocation();
  let navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  }, [location]);

  return (
    <LandingWrapper>
      <BgImage />
      <Outlet />
    </LandingWrapper>
  );
};

export default LandingPage;
