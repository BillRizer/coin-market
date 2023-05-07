import React, { HTMLAttributes } from "react";
import { theme } from "../../../../global/styles/theme-base";

interface Props extends HTMLAttributes<HTMLDivElement> {
  num: number;
  prefix?: string;
  sufix?: string;
  showSignal?: boolean;
}

export function NumberCotationComponent({
  num,
  sufix = "",
  prefix = "",
  showSignal = false,
  ...rest
}: Props) {
  const isPositive = num >= 0;
  const signal = isPositive ? "+" : "";
  const numText = `${prefix}${showSignal ? signal : ""}${num}${sufix}`;
  const greenColor = theme.colors.tertiary.w700;
  const redColor = theme.colors.quartenary.w700;
  return (
    <div style={{ color: isPositive ? greenColor : redColor }} {...rest}>
      {numText}
    </div>
  );
}
