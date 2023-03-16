import styled from "styled-components";
// types
import { InputType } from "@/types/input";

export const InputWrapper = styled.div<InputType>`
  width: ${(props) => `${props.width}` || `1rem`};
  height: ${(props) => `${props.height}px` || `1rem`};
  border: ${(props) => `1px solid ${props.borderColor}` || `unset`};
  border-radius: ${(props) => `${props.borderRadius}px` || `unset`};
  background: ${(props) => props.background || `transparent`};

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
  padding: 2px 10px;
  &:focus-within {
    border: ${(props) => `1px solid ${props.hoverColor}` || `unset`};
  }
`;

export const InputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const InputArea = styled.input<InputType>`
  width: 100%;
  height: 100%;
  font-size: 16px;

  box-sizing: border-box;
  outline: none;
  border: none;

  background: ${(props) => props.background || `transparent`};
  color: ${(props) => props.fontColor || `black`};
`;
