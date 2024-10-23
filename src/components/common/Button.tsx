import React from "react";
import { Button as MButton, ButtonProps as MButtonProps } from "@mantine/core";

interface CustomButtonProps extends MButtonProps {
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<CustomButtonProps> = ({ type, ...props }) => {
  return <MButton type={type} {...props} />;
};

export default Button;
