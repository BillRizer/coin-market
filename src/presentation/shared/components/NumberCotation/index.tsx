import React from "react";

interface Props {
  num: number;
  prefix?: string;
  sufix?: string;
  showSignal?: boolean;
}

export function NumberComponent({
  num,
  sufix = "",
  prefix = "",
  showSignal = false,
}: Props) {
  const isPositive = num >= 0;
  const signal = isPositive ? "+" : "";
  const numText = `${prefix}${showSignal ? signal : ""}${num}${sufix}`;
  return <div style={{ color: isPositive ? "green" : "red" }}>{numText}</div>;
}
