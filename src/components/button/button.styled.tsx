import styled from "styled-components";
// types
import { ButtonType } from "@/types/button";

export const ButtonWrapper = styled.button<ButtonType>`
  width: ${(props) => `${props.Width}` || `1rem`};
  height: ${(props) => `${props.Height}px` || `1rem`};

  background: ${(props) => props.Background || `white`};
  box-shadow: ${(props) => props.BoxShadow || `none`};

  border: ${(props) => props.Border || `none`};
  border-radius: ${(props) => `${props.BorderRadius}px` || `unset`};

  /* pointer */
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  }
`;
