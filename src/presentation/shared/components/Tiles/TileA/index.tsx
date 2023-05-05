import React, { Component, HTMLAttributes, ReactElement } from "react";
import * as S from "./style";
import { GenericBorderStyle } from "../../../components-styled/GenericBorder";
import { Hidden } from "react-grid-system";
interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: any;
  color: string;
  leftText: string;
  rightText: string;
}
export const TileAComponent = ({
  icon,
  color,
  leftText,
  rightText,
  ...rest
}: Props) => {
  return (
    <GenericBorderStyle>
      <S.Container>
        <S.Left>
          <S.Thumb>
            <img src={icon} alt="" />
          </S.Thumb>
          <span  className="no-margin-all">
            <h4>Balance in US$</h4>
            <Hidden xs sm>
            <p className="color-sec-base">(approximately)</p>
            </Hidden>
          </span>
        </S.Left>
        <S.Right>
          <h3 className="w700">R$ 12,837.13</h3>
        </S.Right>
      </S.Container>
    </GenericBorderStyle>
  );
};
