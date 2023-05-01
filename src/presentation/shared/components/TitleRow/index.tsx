import React, { ReactComponentElement, ReactPropTypes } from "react";
import * as Styled from "./style";
import { IconComponent } from "../Icon";

interface Props {
  Icon?: any;
  title: string;
  options: any;
}

export const TitleRowComponent = ({
  Icon,
  title,
  options,
}: Props) => {
  return (
    <div>
      {Icon && <IconComponent Icon={Icon} size="large"/>}
      {title}
      
    </div>
  );
};
