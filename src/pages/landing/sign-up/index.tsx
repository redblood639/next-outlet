import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  RegisterWrapper,
  LoginCard,
  FormItem,
  UserImage,
} from "./sign-up.styled";
// types
import { registerType } from "@/types/auth";
// redux
import { useAppDispatch } from "@/store/hooks";
import { RegisterUser } from "@/store/slices/registerSlice";

const RegisterPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [eye1, setEye1] = useState<boolean>(false);
  const [eye2, setEye2] = useState<boolean>(false);
  const [initialValue, setInitialValue] = useState<registerType>({
    email: "",
    password: "",
    confirmPassword: "",
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
      confirmPassword: Yup.string()
        .test("passwords-match", "Passwords must match", function (value) {
          return this.parent.password === value;
        })
        .required("This field is required!"),
    });
  };

  const handleRegister = (formValue: registerType) => {
    dispatch(RegisterUser(formValue));
  };

  return (
    <RegisterWrapper>
      <LoginCard>
        <UserImage />
        <div>
          <Label fontSize={30} fontWeight={700} lineHeight={36}>
            Create an account
          </Label>
        </div>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form
            style={{
              width: "100%",
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
                      icon={<MailIcon />}
                      placeholder="please input your e-mail"
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
              <Label
                fontSize={20}
                lineHeight={24}
                fontColor={"#7B7777"}
                display={"block"}
                padding={"0 0 10px 0"}
              >
                Password
              </Label>

              <Field name="password">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }: any) => (
                  <div>
                    <Input
                      type={eye1 ? "text" : "password"}
                      width={"100%"}
                      height={55}
                      borderColor={"#C7BFBF"}
                      hoverColor={"#007DF8"}
                      borderRadius={10}
                      placeholder="please input your password"
                      {...field}
                      icon={
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
                    {meta.touched && meta.error && (
                      <div className="auth-error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
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

              <Field name="confirmPassword">
                {({
                  field, // { name, value, onChange, onBlur }
                  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                  meta,
                }: any) => (
                  <div>
                    <Input
                      type={eye2 ? "text" : "password"}
                      width={"100%"}
                      height={55}
                      borderColor={"#C7BFBF"}
                      hoverColor={"#007DF8"}
                      borderRadius={10}
                      placeholder="please confirm your password"
                      {...field}
                      icon={
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
              background={"#007df8"}
              boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              borderRadius={10}
              typeof="submit"
            >
              <Label fontSize={22} lineHeight={27} fontColor={"white"}>
                Create account
              </Label>
            </Button>
          </Form>
        </Formik>
        <div>
          <Label fontSize={20} lineHeight={24} fontColor={"#7B7777"}>
            Already have an account ?{" "}
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Label fontColor={"#007DF8"}>Sign In</Label>
            </Link>
          </Label>
        </div>
      </LoginCard>
    </RegisterWrapper>
  );
};

export default RegisterPage;
