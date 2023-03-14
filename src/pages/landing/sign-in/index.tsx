import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// components
import Label from "@/components/label";
import Button from "@/components/button";
import Input from "@/components/input";
// icons
import MailIcon from "@/assets/svgs/mail";
import EyeIcon from "@/assets/svgs/eye";
import EyeOffIcon from "@/assets/svgs/eye-off";
// styled components
import {
  LoginPageWrapper,
  LoginCard,
  FormItem,
  UserImage,
} from "./sign-in.styled";

const LoginPage: React.FC = () => {
  const [eye, setEye] = useState(false);

  return (
    <LoginPageWrapper>
      <LoginCard>
        <UserImage />
        <div>
          <Label fontSize={30} fontWeight={700} lineHeight={36}>
            <b>Login to your account</b>
          </Label>
        </div>
        <FormItem>
          <Label
            fontSize={20}
            lineHeight={24}
            fontColor={"#7B7777"}
            display={"block"}
            padding={"0 0 10px 0"}
          >
            Email
          </Label>
          <Input
            Type="text"
            Width={"100%"}
            Height={55}
            BorderColor={"#C7BFBF"}
            HoverColor={"#007DF8"}
            BorderRadius={10}
            Icon={<MailIcon />}
          />
        </FormItem>
        <FormItem>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Label
              fontSize={20}
              lineHeight={24}
              fontColor={"#7B7777"}
              display={"block"}
              padding={"0 0 10px 0"}
            >
              Password
            </Label>
            <Link to={"/reset"} style={{ textDecoration: "none" }}>
              <Label
                fontSize={20}
                lineHeight={24}
                fontColor={"#007df8"}
                display={"block"}
                padding={"0 0 10px 0"}
              >
                Forgot ?
              </Label>
            </Link>
          </div>
          <Input
            Type={eye ? "text" : "password"}
            Width={"100%"}
            Height={55}
            BorderColor={"#C7BFBF"}
            HoverColor={"#007DF8"}
            BorderRadius={10}
            Icon={
              eye ? (
                <div onClick={() => setEye(false)}>
                  <EyeOffIcon />
                </div>
              ) : (
                <div onClick={() => setEye(true)}>
                  <EyeIcon />
                </div>
              )
            }
          />
        </FormItem>
        <Button
          Width={"100%"}
          Height={55}
          Background={"#007df8"}
          BoxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          BorderRadius={10}
        >
          <Label fontSize={22} lineHeight={27} fontColor={"white"}>
            Login now
          </Label>
        </Button>
        <div>
          <Label fontSize={20} lineHeight={24} fontColor={"#7B7777"}>
            Don't you have an account ?{" "}
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              <Label fontColor={"#007DF8"}>Sign Up</Label>
            </Link>
          </Label>
        </div>
      </LoginCard>
    </LoginPageWrapper>
  );
};

export default LoginPage;
