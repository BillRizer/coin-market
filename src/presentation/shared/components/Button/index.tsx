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
  return (
    <Styled.Button onClick={onClick} color={color} size={size} {...rest}>
      {Icon && <IconComponent Icon={Icon} size={size} />}
      {label ? label : children}
    </Styled.Button>
  );
};
