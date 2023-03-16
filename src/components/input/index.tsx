import React from "react";
// styled component
import {
  InputArea,
  InputIcon,
  InputWrapper,
} from "@/components/input/input.styled";
// types
import { InputType } from "@/types/input";

const Input: React.FC<InputType> = ({ icon, type, ...props }) => {
  return (
    <InputWrapper {...props}>
      <InputArea type={type} {...props} placeholder={props.placeholder} />
      <InputIcon>{icon}</InputIcon>
    </InputWrapper>
  );
};

export default Input;
