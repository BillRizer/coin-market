import React, { useState } from "react";
import { ButtonComponent } from "../../shared/components/Button";
import { InputComponent } from "../../shared/components/Input";
import IconUser from "../../../assets/icons/icon-user.svg";
import { SelectComponent } from "../../shared/components/Select";
import { TableStyled } from "../../shared/components-styled/Table";
import { DividerStyled } from "../../shared/components-styled/Divider";
import {
  ICrytoAbbrev,
  getCryptoIconUsingAbrev,
} from "../../../application/constants/crypto";
import styled from "styled-components";

interface Props {
  cryptoAbbrev: ICrytoAbbrev;
  callback: Function;
}

export const MessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary.w400};
  justify-content: space-evenly;
  max-width: 232px;
  margin: auto;
`;

export const ModalTransferCrypto = ({ cryptoAbbrev, callback }: Props) => {
  const [transfer, setTransfer] = useState<string>("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!quantity || !transfer) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    const quantityParsed: number = Number(quantity);
    if (
      quantity.trim() === "" ||
      isNaN(quantityParsed) ||
      quantityParsed <= 0
    ) {
      setError("Por favor, Informe uma quantidade válida.");
      return;
    }
    callback(quantity, transfer, cryptoAbbrev);
  };
  return (
    <div>
      <h4 className="center w700">Transfer Crypto</h4>
      <DividerStyled marginTop="24px" marginBottom="24px" />
      <MessageStyled>
        <div className="title">You are transfering</div>
        <img src={getCryptoIconUsingAbrev(cryptoAbbrev)} alt="" />
        <div className="text-label">{cryptoAbbrev.toUpperCase()}</div>
      </MessageStyled>

      <form onSubmit={handleSubmit}>
        <SelectComponent
          label="Transfer"
          id="transfer"
          value={transfer}
          onChange={setTransfer}
          options={[
            { label: "Transfer Out", value: "transfer_out" },
            { label: "Transfer In", value: "transfer_in" },
          ]}
          placeholder="Select Transfer"
          error={error}
        />
        <InputComponent
          label="Quantity"
          id="quantity"
          type="number"
          value={quantity}
          onChange={setQuantity}
          error={error}
          placeholder="0,00"
        />
        {error && <div className="text-label center">{error}</div>}
        <ButtonComponent color="primary" size="medium" className="full-width">
          Transfer Crypto
        </ButtonComponent>
      </form>
    </div>
  );
};
