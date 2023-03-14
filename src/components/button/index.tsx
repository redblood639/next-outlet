import React from "react";
// import the types
import { ButtonType } from "@/types/button";
// Styled Components
import { ButtonWrapper } from "@/components/button/button.styled";

const Button: React.FC<ButtonType> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
