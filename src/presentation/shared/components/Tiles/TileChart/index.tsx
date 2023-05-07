import React, { HTMLAttributes } from "react";
import * as S from "./style";
import { GenericBorderStyle } from "../../../components-styled/GenericBorder";
import { NumberCotationComponent } from "../../NumberCotation";
import { IconComponent } from "../../Icon";
import { ChartComponent } from "./chart";
interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: any;
  color?: string;
  cryptoAbbreviation: string;
  title: string;
  cryptoValue: number;
  chartData: Array<any>;
}
export const TileChartComponent = ({
  icon,
  color,
  cryptoAbbreviation,
  title,
  cryptoValue,
  chartData,
  ...rest
}: Props) => {
  return (
    <GenericBorderStyle>
      <S.Container>
        <S.Left className="no-margin-all">
          <S.Title className="text-small-label">{title}</S.Title>
          <S.LineCrypto>
            <IconComponent
              className="crypticon"
              Icon={icon}
              size="big"
            ></IconComponent>
            <span className="text-label">{cryptoAbbreviation}</span>
          </S.LineCrypto>
          <S.Amount className="text-label">
            <NumberCotationComponent showSignal={true} num={cryptoValue} sufix="%" />
          </S.Amount>
        </S.Left>
        <S.Right>
          <ChartComponent data={chartData} />
        </S.Right>
      </S.Container>
    </GenericBorderStyle>
  );
};
