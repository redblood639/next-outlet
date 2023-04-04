import styled from "styled-components";
// types
import { ButtonType } from "@/types/button";

export const ButtonWrapper = styled.button<ButtonType>`
  width: ${(props) => `${props.width}` || `14px`};
  height: ${(props) => `${props.height}px` || `14px`};

  background: ${(props) => props.background || `white`};
  box-shadow: ${(props) => props.boxShadow || `none`};

  border: ${(props) => props.border || `none`};
  border-radius: ${(props) => `${props.borderRadius}px` || `unset`};

  /* pointer */
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hoveredBackground || `#684ae2`};
  }

  @media screen and (max-width: 1440px) {
    width: calc(${(props) => props.width}px * 0.7);
    height: calc(${(props) => props.height}px * 0.7);
  }
`;
