import React, { Component } from "react";
import { TableStyled } from "../../shared/components-styled/Table";
import iconBitcoin from "../../../assets/icons/icon-bitcoin.svg";
import iconCardano from "../../../assets/icons/icon-cardano.svg";
import iconEthereum from "../../../assets/icons/icon-ethereum.svg";
import iconSolana from "../../../assets/icons/icon-solana.svg";
import iconUsdcoin from "../../../assets/icons/icon-usdcoin.svg";
import iconWallet from "../../../assets/icons/icon-wallet.svg";
import iconTrade from "../../../assets/icons/icon-trade.svg";
import { FaPlus } from "react-icons/fa";
import { IconComponent } from "../../shared/components/Icon";

export const Table = ({}) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <td>#</td>
          <td>Crypto</td>
          <td>Holdings</td>
          <td>Change</td>
          <td className="mini">Trade</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="mini">01</td>
          <td className="inline icon">
            <IconComponent Icon={iconBitcoin} size="large"></IconComponent>{" "}
            Bitcoin
          </td>
          <td>eth</td>
          <td>01</td>
          <td className="mini">
            <IconComponent Icon={iconTrade} size="medium"></IconComponent>
          </td>
        </tr>
        <tr>
          <td className="mini">01</td>
          <td className="inline icon">
            <IconComponent Icon={iconEthereum} size="large"></IconComponent>{" "}
            Ethereum ETH
          </td>
          <td>eth</td>
          <td>01</td>
          <td className="mini">
            <IconComponent Icon={iconTrade} size="medium"></IconComponent>
          </td>
        </tr>
        <tr>
          <td className="mini">01</td>
          <td className="inline icon">
            <IconComponent Icon={iconCardano} size="large"></IconComponent>{" "}
            Cardano ADA
          </td>
          <td>eth</td>
          <td>01</td>
          <td className="mini">
            <IconComponent Icon={iconTrade} size="medium"></IconComponent>
          </td>
        </tr>
        <tr>
          <td className="mini">01</td>
          <td className="inline icon">
            <IconComponent Icon={iconSolana} size="large"></IconComponent>{" "}
            Solana SOL
          </td>
          <td>eth</td>
          <td>01</td>
          <td className="mini">
            <IconComponent Icon={iconTrade} size="medium"></IconComponent>
          </td>
        </tr>
      </tbody>
    </TableStyled>
  );
};
