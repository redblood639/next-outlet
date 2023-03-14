import React from "react";
// import the types
import { LabelType } from "@/types/label";
// Styled Components
import { LabelWrapper } from "@/components/label/label.styled";

const Label: React.FC<LabelType> = ({ children, ...props }) => {
  return <LabelWrapper {...props}>{children}</LabelWrapper>;
};

export default Label;
