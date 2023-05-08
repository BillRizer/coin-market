import React, { ReactPropTypes } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";
import { convertToCurrencyFormat } from "../../../../global/utils/convert-to-currency";
import { NumberCotationComponent } from "../NumberCotation";

interface Props {
  size: "compact" | "full";
}

export const MarqueeCotationCryptComponent = ({ size }: Props) => {
  const cotations = [
    { label: "BIT", value: 23.63, change: 1.6 },
    { label: "DOG", value: 3.63, change: 1.1 },
    { label: "ETH", value: 7.6, change: -43.3 },
    { label: "SOL", value: 11.69, change: -2 },
    { label: "XLM", value: 100.63, change: 10.1 },
    { label: "ABC", value: 10, change: 1.1 },
  ];

  const CotationToText = (cotations: any) => {
    return cotations.map(
      (c: any) =>
        `${c.label} ${convertToCurrencyFormat(c.value, "USD", "en-US")} ${(
          <NumberCotationComponent num={c.change}></NumberCotationComponent>
        )}  `
    );
  };
  return (
    <S.Container className={size}>
      <S.Text>
        {/* BIT R$ 23,62 +7,082 DOG R$ 23,62 -5,230 ETH R$ 23,62 +1,023 SOL R$23,62 +3,908 XLM R$ 23,62 -1,906 */}
        {cotations.map((c: any) => {
          return (
            <S.Item>
              {c.label} {convertToCurrencyFormat(c.value, "USD", "en-US")}{" "} 
              <NumberCotationComponent sufix="%" showSignal num={c.change}></NumberCotationComponent>
            </S.Item>
          );
        })}
      </S.Text>
    </S.Container>
  );
};
