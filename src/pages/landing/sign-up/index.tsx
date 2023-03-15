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
  RegisterWrapper,
  LoginCard,
  FormItem,
  UserImage,
} from "./sign-up.styled";

const RegisterPage: React.FC = () => {
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);

  return (
    <RegisterWrapper>
      <LoginCard>
        <UserImage />
        <div>
          <Label fontSize={30} fontWeight={700} lineHeight={36}>
            Create an account
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
          <Label
            fontSize={20}
            lineHeight={24}
            fontColor={"#7B7777"}
            display={"block"}
            padding={"0 0 10px 0"}
          >
            Password
          </Label>

          <Input
            Type={eye1 ? "text" : "password"}
            Width={"100%"}
            Height={55}
            BorderColor={"#C7BFBF"}
            HoverColor={"#007DF8"}
            BorderRadius={10}
            Icon={
              eye1 ? (
                <div onClick={() => setEye1(false)}>
                  <EyeOffIcon />
                </div>
              ) : (
                <div onClick={() => setEye1(true)}>
                  <EyeIcon />
                </div>
              )
            }
          />
        </FormItem>
        <FormItem>
          <Label
            fontSize={20}
            lineHeight={24}
            fontColor={"#7B7777"}
            display={"block"}
            padding={"0 0 10px 0"}
          >
            Confirm Password
          </Label>

          <Input
            Type={eye2 ? "text" : "password"}
            Width={"100%"}
            Height={55}
            BorderColor={"#C7BFBF"}
            HoverColor={"#007DF8"}
            BorderRadius={10}
            Icon={
              eye2 ? (
                <div onClick={() => setEye2(false)}>
                  <EyeOffIcon />
                </div>
              ) : (
                <div onClick={() => setEye2(true)}>
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
            Create account
          </Label>
        </Button>
        <div>
          <Label fontSize={20} lineHeight={24} fontColor={"#7B7777"}>
            Already have an account ?{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Label fontColor={"#007DF8"}>Sign In</Label>
            </Link>
          </Label>
        </div>
      </LoginCard>
    </RegisterWrapper>
  );
};

export default RegisterPage;
