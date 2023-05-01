import React, { Component, HTMLAttributes, ReactElement } from "react";
import * as S from "./style";
interface Props extends HTMLAttributes<HTMLDivElement> {
  Icon: any;
  legend: string;
  title: string;
  text: string;
}
export const TileComponent = ({
  Icon,
  legend,
  title,
  text,
  ...rest
}: Props) => {
  return (
    <S.Container {...rest}>
      <img src={Icon} alt="" />
      <S.Legend>{legend}</S.Legend>
      <S.Title>{title}</S.Title>
      <p>{text}</p>
    </S.Container>
  );
};
