import React from "react";
// styled components
import { TextAreaWrapper } from "./textarea.styled";
// types
import { TextAresType } from "@/types/textarea";

const TextArea: React.FC<TextAresType> = ({ ...props }) => {
  return <TextAreaWrapper {...props}></TextAreaWrapper>;
};

export default TextArea;
