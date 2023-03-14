import styled from "styled-components";
// types
import { InputType } from "@/types/input";

export const InputWrapper = styled.div<InputType>`
  width: ${(props) => `${props.Width}` || `1rem`};
  height: ${(props) => `${props.Height}px` || `1rem`};
  border: ${(props) => `1px solid ${props.BorderColor}` || `unset`};
  border-radius: ${(props) => `${props.BorderRadius}px` || `unset`};

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
  padding: 2px 10px;

  &:focus-within {
    border: ${(props) => `1px solid ${props.HoverColor}` || `unset`};
  }
`;

export const InputArea = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
`;

export const InputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
