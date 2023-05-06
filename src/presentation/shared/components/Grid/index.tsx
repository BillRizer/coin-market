import React, { ReactNode } from "react";
import * as S from "./style";
interface IHeader {
  label: string;
  size?: string;
}
interface Props {
  header: Array<IHeader>;
  children: ReactNode;
}

export const GridComponent = ({ header, children }: Props) => {
  const size: Array<string> = header.map(({ size }): string => size || "");

  return <S.Container size={size}>{children}</S.Container>;
};
