import React, { ReactNode } from "react";
import * as S from "./style";
interface IHeader {
  label: string;
  size?: string;
}
interface Props {
  header: Array<IHeader>;
  children: ReactNode;
  isEmpty?: boolean;
}

export const GridComponent = ({ isEmpty = false, header, children }: Props) => {
  const size: Array<string> = header.map(({ size }): string => size || "");
  return (
    <S.Container isEmpty={isEmpty} size={size}>
      {children}
    </S.Container>
  );
};
