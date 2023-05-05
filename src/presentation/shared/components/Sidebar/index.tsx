import React, { Component, HTMLAttributes, ReactElement } from "react";
import IconMinimalistWallet from "../../../../assets/icons/icon-m-wallet.svg";
import IconMinimalistBitcoin from "../../../../assets/icons/icon-m-bitcoin.svg";
import IconMinimalistCircle from "../../../../assets/icons/icon-m-circle.svg";
import IconMinimalistChart from "../../../../assets/icons/icon-m-chart.svg";

import * as S from "./style";
import { IconComponent } from "../Icon";
interface Props {
  children: ReactElement;
}
export const SidebarComponent = ({ children, ...rest }: Props) => {
  const elements = [
    {
      icon: IconMinimalistWallet,
      title: "Lorem Ipsum",
      tooltip: "Lorem Ipsum",
    },
    {
      icon: IconMinimalistCircle,
      title: "Lorem Ipsum",
      tooltip: "Lorem Ipsum",
    },
    {
      icon: IconMinimalistBitcoin,
      title: "Lorem Ipsum",
      tooltip: "Lorem Ipsum",
    },
    {
      icon: IconMinimalistChart,
      title: "Lorem Ipsum",
      tooltip: "Lorem Ipsum",
    },
  ];
  return (
    <S.Container >
      <S.Menu>
        {elements.map((e, k) => (
          <S.Item key={k}>
            <IconComponent Icon={e.icon} size="large"></IconComponent>
            {/* <div className="text">{e.title}</div> */}
          </S.Item>
          
        ))}
      </S.Menu>
      <div className="content">{children}</div>
    </S.Container>
  );
};
