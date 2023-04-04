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
  SignWrapper,
  SignUpCard,
  FormItem,
} from "./sign-up.styled";
// types
import { registerType } from "@/types/auth";
// redux
import { useAppDispatch } from "@/store/hooks";
import { RegisterUser } from "@/store/slices/registerSlice";

const labelStyle = {
  fontSize: 16,
  lineHeight: 24,
  fontColor: "#7B7777",
  display: "block",
  padding: "0 0 10px 0",
};

const inputStyle = {
  width: "100%",
  height: 55,
  borderColor: "#C7BFBF",
  hoverColor: "#007DF8",
  borderRadius: 10,
};

export const Item = ({
  label,
  name,
  placeholder,
  type = "text",
  icon,
}: any) => {
  /* Email */
  return (
    <FormItem>
      <Label {...labelStyle}>{label}</Label>

      <Field name={name}>
        {({ field, meta }: any) => (
          <div>
            <Input
              type={type}
              {...inputStyle}
              {...field}
              icon={icon}
              placeholder={placeholder}
            />
            {meta.touched && meta.error && (
              <div className="auth-error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </FormItem>
  );
};

const RegisterPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [eye1, setEye1] = useState<boolean>(false);
  const [eye2, setEye2] = useState<boolean>(false);
  const [initialValue, setInitialValue] = useState<registerType>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    reg_number: "",
    address: "",
    country: "",
    pincode: "",
    director_arr: "",
    number: "",
    numbercountrycode: "",
    paymentMethod: "",
    margin: "",
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
      name: Yup.string().required("This field is required"),
      reg_number: Yup.string().required("This field is required"),
      address: Yup.string().required("This field is required"),
      country: Yup.string().required("This field is required"),
      pincode: Yup.string().required("This field is required"),
      director_arr: Yup.string().required("This field is required"),
      number: Yup.string().required("This field is required"),
      numbercountrycode: Yup.string().required("This field is required"),
      paymentMethod: Yup.string().required("This field is required"),
      margin: Yup.string().required("This field is required"),
    });
  };

  const handleRegister = (formValue: registerType) => {
    dispatch(RegisterUser(formValue));
  };

  return (
    <RegisterWrapper>
      <SignWrapper>
        <SignUpCard>
          <div>
            <Label fontSize={25} fontWeight={700} lineHeight={36}>
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
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Item label="Name" name="name" placeholder="Hello World" />

              <Item
                label="Partner Registration Number"
                name="reg_number"
                placeholder="0x123"
              />
              <Item label="Country" name="country" placeholder="CA" />
              <Item label="Address" name="address" placeholder="Toronto, CA" />
              <Item label="Pin Code" name="pincode" placeholder="123456" />
              <Item
                label="Director"
                name="director_arr"
                placeholder="{'Director#1', 'Director#007', 'Director#101'}"
              />
              <Item
                label="Phonenumber"
                name="number"
                placeholder="+12364587985"
              />
              <Item
                label="CountryCode"
                name="numbercountrycode"
                placeholder="+1"
              />
              {/* Currnetly I am using Text but we will change as select*/}
              <Item
                label="Payment Method"
                name="paymentMethod"
                placeholder="fiat wire"
              />
              <Item label="Margin" name="margin" placeholder="1.00" />
              <Item
                label="Email"
                name="email"
                icon={<MailIcon />}
                placeholder="please input your e-mail"
              />
              <Item
                label="Password"
                name="password"
                placeholder="please input your password"
                type={eye1 ? "text" : "password"}
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
              <Item
                label="Confirm Password"
                name="confirmPassword"
                placeholder="please confirm your password"
                type={eye2 ? "text" : "password"}
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
                  Create account
                </Label>
              </Button>
            </Form>
          </Formik>
          <div>
            <Label fontSize={16} lineHeight={24} fontColor={"#7B7777"}>
              Already have an account ?{" "}
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Label fontColor={"#007DF8"}>Sign In</Label>
              </Link>
            </Label>
          </div>
        </SignUpCard>
      </SignWrapper>
    </RegisterWrapper>
  );
};

export default RegisterPage;
