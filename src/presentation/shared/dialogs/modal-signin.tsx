import React, { useState } from "react";
import { ButtonComponent } from "../components/Button";
import { InputComponent } from "../components/Input";
import { SelectComponent } from "../components/Select";
import { DividerStyled } from "../components-styled/Divider";
import { IListCrypto } from "../../../application/types/crypto";
import { FiLock, FiMail } from "react-icons/fi";
import { useModal } from "../../../application/hook/modal";
import { ModalSignUp } from "./modal-signup";
import { useAuth } from "../../../application/hook/useAuth";
import { useNavigate } from "react-router-dom";

interface Props {}

export const ModalSignIn = ({}: Props) => {
  const [email, setEmail] = useState<string>("");
  const { showModal, hideModal } = useModal();
  const { signIn } = useAuth();
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUpModal = () => {
    showModal({
      body: <ModalSignUp />,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // validar campos
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    signIn({ email, password });
    navigate("/private");
    hideModal();
  };

  return (
    <div>
      <h4 className="center ">
        Sign in to{" "}
        <span className="w700">
          <span className="color-primary">Coin</span>Synch
        </span>
      </h4>
      <DividerStyled marginTop="24px" marginBottom="24px" />

      <form onSubmit={handleSubmit}>
        <InputComponent
          id="email"
          type="text"
          value={email}
          onChange={setEmail}
          error={error}
          placeholder="E-mail"
          Icon={FiMail}
        />
        <InputComponent
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          error={error}
          placeholder="Password"
          Icon={FiLock}
        />
        {error && <div className="text-label center">{error}</div>}
        <ButtonComponent color="primary" size="medium" className="full-width">
          Sign in
        </ButtonComponent>
        <div className="text-small-label center">
          Don’t have an account?{" "}
          <span className="w700 pointer" onClick={handleSignUpModal}>
            Sign up to <span className="color-primary">Coin</span>
            <span className="color-sec-4">Synch</span>
          </span>
        </div>
      </form>
    </div>
  );
};
