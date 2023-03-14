import React from "react";
// styled component
import {
  InputArea,
  InputIcon,
  InputWrapper,
} from "@/components/input/input.styled";
// types
import { InputType } from "@/types/input";

const Input: React.FC<InputType> = ({ Icon, Type, ...props }) => {
  return (
    <InputWrapper {...props}>
      <InputArea type={Type} />
      <InputIcon>{Icon}</InputIcon>
    </InputWrapper>
  );
};

export default Input;
