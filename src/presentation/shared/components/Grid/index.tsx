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
  mobileCols?: string;
}

export const GridComponent = ({
  showHeader = true,
  isEmpty = false,
  header,
  children,
  mobileCols = "1fr 1fr",
}: Props) => {
  const size: Array<string> = header.map(({ size }): string => size || "");
  return (
    <S.Container isEmpty={isEmpty} size={size} mobileCols={mobileCols}>
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
