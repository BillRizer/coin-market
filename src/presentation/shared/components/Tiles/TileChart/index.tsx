import React, { HTMLAttributes } from "react";
import * as S from "./style";
import { GenericBorderStyle } from "../../../components-styled/GenericBorder";
import { NumberCotationComponent } from "../../NumberCotation";
import { IconComponent } from "../../Icon";
interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: any;
  color?: string;
  crypto: string;
  cryptoValue: number;
  data: Array<any>;
}
export const TileChartComponent = ({
  icon,
  color,
  crypto,
  cryptoValue,
  data,
  ...rest
}: Props) => {
  return (
    <GenericBorderStyle>
      <S.Container>
        <S.Left className="no-margin-all">
          <S.Title className="text-small-label">Daily Variation</S.Title>
          <S.LineCrypto>
            <IconComponent
              className="crypticon"
              Icon={icon}
              size="big"
            ></IconComponent>
            <span className="text-label">ETH</span>
          </S.LineCrypto>
          <S.Amount className="text-label">
            <NumberCotationComponent showSignal={true} num={4.12} sufix="%" />
          </S.Amount>
        </S.Left>
        <S.Right>Chart HEre</S.Right>
      </S.Container>
    </GenericBorderStyle>
  );
};
