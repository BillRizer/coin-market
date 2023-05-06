import React, { useState } from "react";
import { ButtonComponent } from "../../shared/components/Button";
import { InputComponent } from "../../shared/components/Input";
import IconUser from "../../../assets/icons/icon-user.svg";
import { SelectComponent } from "../../shared/components/Select";
import { TableStyled } from "../../shared/components-styled/Table";
export const ModalSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // validar campos
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    // enviar dados do formulário
    // ...
  };
  return (
    <div>
      <h4>Add Crypto</h4>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          error={error}
          placeholder="Email address"
          Icon={IconUser}
        />
        <InputComponent
          label="Senha"
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          error={error}
        />
        <InputComponent
          label="Senha"
          id="number"
          value={password}
          onChange={setPassword}
          type="number"
          error={error}
        />
        <SelectComponent
          label="Senha"
          id="number"
          value={password}
          onChange={setPassword}
          options={[{ label: "pass", value: 1 },{ label: "pass", value: 2 }]}
          error={error}
        />
        <ButtonComponent color="primary" size="medium">
          Add Crypto
        </ButtonComponent>
      </form>
      
    </div>
  );
};
