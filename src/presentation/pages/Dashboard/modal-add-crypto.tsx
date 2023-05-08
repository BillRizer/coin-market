import React, { useState } from "react";
import { ButtonComponent } from "../../shared/components/Button";
import { InputComponent } from "../../shared/components/Input";
import { SelectComponent } from "../../shared/components/Select";
import { DividerStyled } from "../../shared/components-styled/Divider";
import { IListCrypto } from "../../../application/types/crypto";

interface Props {
  crypto: IListCrypto;
  callback: Function;
}

export const ModalAddCrypto = ({ crypto, callback }: Props) => {
  const [cryptoSelected, setCryptoSelected] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(quantity);
    console.log(cryptoSelected);

    // validar campos
    if (!quantity || !cryptoSelected) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    const quantityParsed: number = Number(quantity);
    if (quantity.trim() === "" || isNaN(quantityParsed)) {
      setError("Por favor, Informe uma quantidade válida.");
      return;
    }

    if (quantityParsed <= 0) {
      setError("Por favor, Quantidade deve ser positiva.");
      return;
    }
    callback(quantity, cryptoSelected);
  };
  const options = crypto.map((item) => ({
    label: item.label,
    value: item.abbrev,
  }));
  return (
    <div>
      <h4 className="center w700">Add Crypto</h4>
      <DividerStyled marginTop="24px" marginBottom="24px" />

      <form onSubmit={handleSubmit}>
        <SelectComponent
          id="transfer"
          value={cryptoSelected}
          onChange={setCryptoSelected}
          placeholder="Choose"
          options={options}
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
          min={0}
        />
        {error && <div className="text-label center">{error}</div>}
        <ButtonComponent color="primary" size="medium" className="full-width">
          Add Crypto
        </ButtonComponent>
      </form>
    </div>
  );
};
