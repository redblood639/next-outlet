import React from "react";

export type ButtonType = {
  Width?: string;
  Height?: number;
  Background?: string;
  BoxShadow?: string;
  BorderRadius?: number;
  Border?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;
