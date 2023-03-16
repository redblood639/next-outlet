import styled from "styled-components";
import bgImage from "@/assets/images/image.png";

export const LandingWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const BgImage = styled.div`
  width: 50%;
  height: 100%;
  filter: blur(2px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${bgImage});
`;
