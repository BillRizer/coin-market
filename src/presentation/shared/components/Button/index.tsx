import React, { ButtonHTMLAttributes, ReactPropTypes } from "react";
import * as Styled from "./style";
import { IconComponent } from "../Icon";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  onClick?: any;
  Icon?: any;
  color?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

export const ButtonComponent = ({
  children,
  onClick,
  Icon,
  color = "primary",
  size = "medium",
  ...rest
}: Props) => {
  return (
    <Styled.Button onClick={onClick} color={color} size={size} {...rest}>
      {Icon && (
        <div className="icon">
          <IconComponent Icon={Icon} size={size} />
        </div>
      )}
      {children}
    </Styled.Button>
  );
};
