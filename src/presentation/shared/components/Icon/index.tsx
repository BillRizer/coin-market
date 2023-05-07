import React, { HTMLAttributes } from "react";
import * as S from "./style";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  Icon: any;
  size?: "12px" | "16px" | "24px" | "32px" | "40px";
  onClick?: any;
  cursorPointer?: boolean;
  disabled?: boolean;
  marginRight?: string;
  marginLeft?: string;
}

export const IconComponent = ({
  Icon,
  size,
  onClick,
  cursorPointer,
  disabled,
  marginRight,
  marginLeft,
  ...props
}: Props) => {
  return (
    <S.Icon
      data-testid="icon"
      cursorPointer
      onClick={onClick}
      className={`${disabled ? "disabled" : ""} ${size}`}
      style={{ width: size, height: size, marginRight, marginLeft }}
      {...props}
    >
      {typeof Icon === "string" ? <img src={Icon} alt="" /> : <Icon />}
    </S.Icon>
  );
};
