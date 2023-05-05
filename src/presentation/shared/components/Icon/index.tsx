import React, { HTMLAttributes } from "react";
import * as Styled from "./style";

interface Props extends HTMLAttributes<HTMLDivElement> {
  Icon: any;
  size?: "small" | "medium" | "big" | "large";
  width?: string;
  height?: string;
  onClick?: any;
  cursorPointer?: boolean;
  disabled?: boolean;
}

export const IconComponent = ({
  Icon,
  size,
  width,
  height,
  onClick,
  cursorPointer,
  disabled,
  ...props
}: Props) => {
  return (
    <Styled.Icon
      data-testid="icon"
      cursorPointer
      onClick={onClick}
      className={`${disabled ? "disabled" : ""} ${size}`}
      style={{ width, height }}
      {...props}
    >
      {typeof Icon === "string" ? <img src={Icon} alt="" /> : <Icon />}
    </Styled.Icon>
  );
};
