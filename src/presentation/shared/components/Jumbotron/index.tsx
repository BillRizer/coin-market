import React, { Component, ReactElement } from "react";
import * as S from "./style";
import { ButtonComponent } from "../Button";
interface Props {
  legend?: string;
  title?: string;
  text?: string;
  children?: ReactElement;
}
export const JumbotronComponent = ({
  children,
  legend,
  title,
  text,
}: Props) => {
  return (
    <S.Container>
      <h5 className="color-primary">{legend}</h5>
      <h2>{title}</h2>
      <p>{text}</p>
      {children && (children)}
    </S.Container>
  );
};
