import styled from "styled-components";
import UserImg from "@/assets/images/user.png";

export const RegisterWrapper = styled.div`
  /*  */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.div`
  width: 124px;
  height: 124px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${UserImg});

  position: absolute;
  top: -62px;
`;

export const LoginCard = styled.div`
  position: relative;

  width: 519px;
  height: 741px;
  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);

  /*  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  padding: 76px 80px 50px 80px;
  box-sizing: border-box;
`;

export const FormItem = styled.div`
  width: 100%;
`;
