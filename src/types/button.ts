import React from "react";

export type ButtonType = {
  width?: string;
  height?: number;
  background?: string;
  boxShadow?: string;
  borderRadius?: number;
  border?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;
