import React, { HTMLAttributes } from "react";

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
  return (
    <div style={{ color: isPositive ? "green" : "red" }} {...rest}>
      {numText}
    </div>
  );
}
