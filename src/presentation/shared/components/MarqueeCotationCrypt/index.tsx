import React, { ReactPropTypes, useEffect, useState } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";
import { convertToCurrencyFormat } from "../../../../global/utils/convert-to-currency";
import { NumberCotationComponent } from "../NumberCotation";
import { IMarqueeCotations } from "../../../../application/types/crypto";
import { getCotationsFromService } from "../../../../application/services/crypto";

interface Props {
  size: "compact" | "full";
  cotations?: IMarqueeCotations;
}

export const MarqueeCotationCryptComponent = ({ size, cotations }: Props) => {
  const [cryptoCotations, setCryptoCotations] =
    useState<IMarqueeCotations | undefined>(cotations);
  useEffect(() => {
    if (!cotations) {
      getCotationsFromService().then((data) => {
        if (data) {
          setCryptoCotations(data)
        }
      });
    }
  }, []);

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
        {cryptoCotations &&
          cryptoCotations.map((c: any) => {
            return (
              <S.Item>
                {c.label} {convertToCurrencyFormat(c.value, "USD", "en-US")}{" "}
                <NumberCotationComponent
                  sufix="%"
                  showSignal
                  num={c.change}
                ></NumberCotationComponent>
              </S.Item>
            );
          })}
      </S.Text>
    </S.Container>
  );
};
