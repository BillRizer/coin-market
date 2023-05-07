import React, { ButtonHTMLAttributes, ReactPropTypes } from "react";
import * as Styled from "./style";
import { IconComponent } from "../Icon";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: any;
  Icon?: any;
  label?: string;
  isResponsive?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  children?: any;
}

export const ButtonComponent = ({
  children,
  onClick,
  Icon,
  label,
  color = "primary",
  size = "medium",
  ...rest
}: Props) => {
  //TODO refactor this
  const iconSize = (buttonsize: string) => {
    if (buttonsize === "small") return "16px";
    if (buttonsize === "medium") return "24px";
    if (buttonsize === "large") return "32px";
  };
  return (
    <Styled.Button onClick={onClick} color={color} size={size} {...rest}>
      {Icon && <IconComponent Icon={Icon} size={iconSize(size)} />}
      {label ? label : children}
    </Styled.Button>
  );
};
