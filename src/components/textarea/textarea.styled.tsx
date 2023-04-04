import { TextAresType } from "@/types/textarea";
import styled from "styled-components";

export const TextAreaWrapper = styled.textarea<TextAresType>`
  width: ${(props) => `${props.width}` || `100%`};
  height: ${(props) => `${props.height}px` || `100%`};
  background: ${(props) => props.background || `transparent`};
  border-radius: ${(props) => `${props.borderRadius}px` || `unset`};

  font-size: 16px;
  padding: 10px;

  box-sizing: border-box;
  outline: none;
  border: none;

  &:focus-within {
    border: ${(props) => `1px solid ${props.hoverColor}` || `unset`};
  }
`;
