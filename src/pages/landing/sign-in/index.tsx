import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  let navigator = useNavigate();
  const [eye, setEye] = useState(false);

  return (
    <LoginPageWrapper>
      <LoginCard>
        <UserImage />
        <div>
          <Label fontSize={30} fontWeight={700} lineHeight={36}>
            Login to your account
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
            type="text"
            width={"100%"}
            height={55}
            borderColor={"#C7BFBF"}
            hoverColor={"#007DF8"}
            borderRadius={10}
            placeholder="please input your e-mail"
            icon={<MailIcon />}
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
            type={eye ? "text" : "password"}
            width={"100%"}
            height={55}
            borderColor={"#C7BFBF"}
            hoverColor={"#007DF8"}
            borderRadius={10}
            placeholder="please input your password"
            icon={
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
          width={"100%"}
          height={55}
          background={"#007df8"}
          boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
          borderRadius={10}
          onClick={() => navigator("/admin")}
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
