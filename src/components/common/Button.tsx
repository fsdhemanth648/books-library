import React from "react";
import { Button as MButton, ButtonProps as MButtonProps } from "@mantine/core";

interface CustomButtonProps extends MButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<CustomButtonProps> = ({
  type = "button",
  onClick,
  ...props
}) => {
  return <MButton type={type} onClick={onClick} {...props} />;
};

export default Button;
