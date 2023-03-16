import styled from "styled-components";
// types
import { ButtonType } from "@/types/button";

export const ButtonWrapper = styled.button<ButtonType>`
  width: ${(props) => `${props.width}` || `1rem`};
  height: ${(props) => `${props.height}px` || `1rem`};

  background: ${(props) => props.background || `white`};
  box-shadow: ${(props) => props.boxShadow || `none`};

  border: ${(props) => props.border || `none`};
  border-radius: ${(props) => `${props.borderRadius}px` || `unset`};

  /* pointer */
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  }
`;
