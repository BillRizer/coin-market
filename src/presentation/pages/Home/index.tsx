import React from "react";
import { ButtonComponent } from "../../shared/components/Button";
import iconBitcoin from "../../../assets/icons/icon-bitcoin.svg";
import iconCardano from "../../../assets/icons/icon-cardano.svg";
import iconEthereum from "../../../assets/icons/icon-ethereum.svg";
import iconSolana from "../../../assets/icons/icon-solana.svg";
import iconUsdcoin from "../../../assets/icons/icon-usdcoin.svg";
import iconWallet from "../../../assets/icons/icon-wallet.svg";
import iconTrade from "../../../assets/icons/icon-trade.svg";
import { FaPlus } from "react-icons/fa";
import { IconComponent } from "../../shared/components/Icon";
import { useModal } from "../../../application/hook/modal";
import { ModalSignIn } from "./modal-signin";
import { TableStyled } from "../../shared/components-styled/Table";
import { TitleRowComponent } from "../../shared/components/TitleRow";

export const HomePage = () => {
  const { showModal } = useModal();

  const a = () => {
    alert("cafe");
  };
  const MockedMessageModal = () => {
    showModal({
      body: <ModalSignIn />,
    });
  };
  return (
    <div>
      <ButtonComponent
        color="tertiary"
        Icon={FaPlus}
        size="small"
        onClick={MockedMessageModal}
      >
        Buy
      </ButtonComponent>
      <IconComponent Icon={FaPlus} size="24px"></IconComponent>
      <br></br>
      <br></br>
      <ButtonComponent color="primary" size="medium">
        Add Crypto
      </ButtonComponent>
      <br></br>
      <br></br>
      <ButtonComponent color="primary" size="small">
        Add crypto
      </ButtonComponent>

      <TitleRowComponent icon={iconWallet} title="My wallet">
        <ButtonComponent size="small">Add Crypto</ButtonComponent>
      </TitleRowComponent>

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
              <IconComponent Icon={iconBitcoin} size="32px"></IconComponent>{" "}
              Bitcoin
            </td>
            <td>eth</td>
            <td>01</td>
            <td className="mini">
              <IconComponent Icon={iconTrade} size="24px"></IconComponent>
            </td>
          </tr>
          <tr>
            <td className="mini">01</td>
            <td className="inline icon">
              <IconComponent Icon={iconEthereum} size="32px"></IconComponent>{" "}
              Ethereum ETH
            </td>
            <td>eth</td>
            <td>01</td>
            <td className="mini">
              <IconComponent Icon={iconTrade} size="24px"></IconComponent>
            </td>
          </tr>
          <tr>
            <td className="mini">01</td>
            <td className="inline icon">
              <IconComponent Icon={iconCardano} size="32px"></IconComponent>{" "}
              Cardano ADA
            </td>
            <td>eth</td>
            <td>01</td>
            <td className="mini">
              <IconComponent Icon={iconTrade} size="24px"></IconComponent>
            </td>
          </tr>
          <tr>
            <td className="mini">01</td>
            <td className="inline icon">
              <IconComponent Icon={iconSolana} size="32px"></IconComponent>{" "}
              Solana SOL
            </td>
            <td>eth</td>
            <td>01</td>
            <td className="mini">
              <IconComponent Icon={iconTrade} size="24px"></IconComponent>
            </td>
          </tr>
        </tbody>
      </TableStyled>
    </div>
  );
};
