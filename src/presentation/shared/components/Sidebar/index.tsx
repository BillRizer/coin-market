import React, { ReactElement, useState } from "react";
import IconMinimalistWallet from "../../../../assets/icons/icon-m-wallet.svg";
import IconMinimalistBitcoin from "../../../../assets/icons/icon-m-bitcoin.svg";
import IconMinimalistCircle from "../../../../assets/icons/icon-m-circle.svg";
import IconMinimalistChart from "../../../../assets/icons/icon-m-chart.svg";
import IconArrowCircle from "../../../../assets/icons/icon-arrow-circle.svg";

import * as S from "./style";
import { IconComponent } from "../Icon";

interface Props {
  children?: ReactElement;
  isResponsive?: boolean;
  defaultIsOpen?: boolean;
}
export const SidebarComponent = ({
  children,
  isResponsive = true,
  defaultIsOpen=false,
  ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);
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
    <S.Container>
      <S.Menu isOpen={isOpen} isResponsive={isResponsive}>
        {elements.map((e, k) => (
          <S.Item key={k} className="no-margin-all">
            <IconComponent Icon={e.icon} size="32px"></IconComponent>
            {isOpen && <div className="text-label">{e.title}</div>}
          </S.Item>
        ))}
        <S.Item>
          <S.ToogleIcon
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            src={IconArrowCircle}
            alt="arrow expand menu"
          />
        </S.Item>
      </S.Menu>
    </S.Container>
  );
};
