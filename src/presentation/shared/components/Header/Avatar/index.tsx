import React, { ReactPropTypes, useState } from "react";
import * as S from "./style";

interface Props {
  isCompact: boolean;
  image: string;
  name: string;
  options: [{ label: string; callback: Function }];
}

export const AvatarComponent = ({ isCompact, image, name, options }: Props) => {
  return (
    <S.Container>
      <S.ImageWrap>
        <img src={image} alt={`Avatar of ${name}`} />
      </S.ImageWrap>
      {!isCompact && <S.Text className="text-label w400">{name}</S.Text>}
    </S.Container>
  );
};
