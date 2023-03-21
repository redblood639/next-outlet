import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

// import { useAppSelector, useAppDispatch } from "@/store/hooks";
// styled components
import { BgImage, LandingWrapper } from "@/pages/landing/landing.styled";

const LandingPage: React.FC = () => {
  let location = useLocation();
  let navigate = useNavigate();

  // The `state` arg is correctly typed as `RootState` already
  // const count = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   if (location.pathname === "/") {
  //     navigate("/login");
  //   }
  // }, [location, navigate]);

  return (
    <LandingWrapper>
      <BgImage />
      <Outlet />
    </LandingWrapper>
  );
};

export default LandingPage;
