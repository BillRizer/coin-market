import React, { ReactNode } from "react";
import * as S from "./style";
interface IHeader {
  label: string;
  size?: string;
}
interface Props {
  header: Array<IHeader>;
  showHeader?: boolean;
  children: ReactNode;
  isEmpty?: boolean;
}

export const GridComponent = ({
  showHeader = true,
  isEmpty = false,
  header,
  children,
}: Props) => {
  const size: Array<string> = header.map(({ size }): string => size || "");
  return (
    <S.Container isEmpty={isEmpty} size={size}>
      {showHeader && (
        <S.Header>
          {header.map(({ label, size }) => (
            <div className="text-label">{label}</div>
          ))}
        </S.Header>
      )}
      {children}
    </S.Container>
  );
};
