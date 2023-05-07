import React, { ReactElement } from "react";
import * as S from "./style";
import { IconComponent } from "../Icon";

interface Props {
  icon?: any;
  title: string;
  children?: ReactElement;
}

export const TitleRowComponent = ({ icon, title, children }: Props) => {
  return (
    <S.Container>
      <div className="left">
        {icon && <IconComponent Icon={icon} size="32px" />}
        <h4>{title}</h4>
      </div>
      <div className="right">{children}</div>
    </S.Container>
  );
};
