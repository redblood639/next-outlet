import styled from "styled-components";
import { LabelType } from "@/types/label";

export const LabelWrapper = styled.span<LabelType>`
  font-size: ${(props) => `${props.fontSize}px` || `1rem`};
  font-weight: ${(props) => `${props.fontWeight}px` || `400`};
  line-height: ${(props) => `${props.lineHeight}px` || `1rem`};
  color: ${(props) => props.fontColor || `black`};
  padding: ${(props) => props.padding || `0`};

  display: ${(props) => props.display || `inline`};
`;
