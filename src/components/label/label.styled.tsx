import styled from "styled-components";
import { LabelType } from "@/types/label";

export const LabelWrapper = styled.span<LabelType>`
  font-size: ${(props) => `${props.fontSize}px` || `14px`};
  font-weight: ${(props) => `${props.fontWeight}` || `400`};
  line-height: ${(props) => `${props.lineHeight}px` || `14px`};
  letter-spacing: ${(props) => `${props.letterSpacing}px` || `1px`};
  color: ${(props) => props.fontColor || `black`};
  padding: ${(props) => props.padding || `0`};

  display: ${(props) => props.display || `inline`};

  @media screen and (max-width: 1440px) {
    font-size: calc(${(props) => props.fontSize}px * 0.7);
  }
`;
