import React, { Component, HTMLAttributes, ReactElement, useCallback } from "react";
import * as S from "./style";
import IconBrand from "../../../../assets/icons/brand.svg";


interface Props {
  isLogged: boolean;
}
export const FooterComponent = ({ isLogged }: Props) => {
  const logged = useCallback(
    () => {
      return (
        <S.Container className="flex-center text-label">
          Copyright © 2022 - All rights reserved
        </S.Container>
      );
    },
    [],
  )
  const notLogged = useCallback(
    () => {
      return (
        <S.Container className="text-label flex-space-between">
          Copyright © 2022 - All rights reserved
          <img src={IconBrand} alt="Brand logo" />
        </S.Container>
      );
    },
    [],
  )
  
  return <>{isLogged ? logged() : notLogged()}</>;
};
