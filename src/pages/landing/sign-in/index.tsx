import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
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
  LoginWrapper,
  FormItem,
} from "./sign-in.styled";
// types
import { loginType } from "@/types/auth";
import { useAppDispatch } from "@/store/hooks";
import { authenticateUser } from "@/store/slices/authSlice";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const [eye, setEye] = useState(false);
  const [initialValue, _] = useState<loginType>({
    email: "",
    password: "",
  });

  //  validate Schema
  const validationSchema = () => {
    return Yup.object().shape({
      email: Yup.string()
        .email("This is not valid email.")
        .required("This field is required"),
      password: Yup.string()
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  };

  const handleRegister = (formValue: loginType) => {
    dispatch(authenticateUser(formValue));
    navigate("/admin/dashboard");
  };

  return (
    <LoginPageWrapper>
      <LoginWrapper>
        <LoginCard>
          <div>
            <Label fontSize={30} fontWeight={700} lineHeight={36}>
              Login to your account
            </Label>
          </div>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
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
                <Field name="email">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }: any) => (
                    <div>
                      <Input
                        type="text"
                        width={"100%"}
                        height={55}
                        borderColor={"#C7BFBF"}
                        hoverColor={"#007DF8"}
                        borderRadius={10}
                        placeholder="please input your e-mail"
                        icon={<MailIcon />}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="auth-error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
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
                </div>

                <Field name="password">
                  {({ field, meta }: any) => (
                    <div>
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
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="auth-error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </FormItem>
              <Button
                width={"100%"}
                height={55}
                background={"#7956ff"}
                hoveredBackground={"#684ae2"}
                boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                borderRadius={10}
                typeof="submit"
              >
                <Label
                  fontSize={20}
                  lineHeight={27}
                  fontColor={"white"}
                  letterSpacing={2}
                >
                  Login now
                </Label>
              </Button>
            </Form>
          </Formik>
          <div>
            <Label fontSize={20} lineHeight={24} fontColor={"#7B7777"}>
              Don't you have an account ?{" "}
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <Label fontColor={"#007DF8"}>Sign Up</Label>
              </Link>
            </Label>
          </div>
        </LoginCard>
      </LoginWrapper>
    </LoginPageWrapper>
  );
};

export default LoginPage;
