import React, { ReactPropTypes } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";

interface Props {
  size: "compact"|"full";
}

export const MarqueeCotationCryptComponent = ({ size }: Props) => {
  return (
    <S.Container className={size}>
      <S.Text>
      BIT R$ 23,62 +7,082 DOG R$ 23,62 -5,230 ETH R$ 23,62 +1,023 SOL R$23,62 +3,908 XLM R$ 23,62 -1,906
      </S.Text>
    </S.Container>
  );
};
