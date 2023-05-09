import React, { useCallback, useState } from "react";
import { ButtonComponent } from "../components/Button";
import { InputComponent } from "../components/Input";
import { SelectComponent } from "../components/Select";
import { DividerStyled } from "../components-styled/Divider";
import { IListCrypto } from "../../../application/types/crypto";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { CheckboxComponent } from "../components/Checkbox";
import { useModal } from "../../../application/hook/modal";
import { SpaceStyled } from "../components-styled/Space";
import { ModalSignIn } from "./modal-signin";
import { areEqual, isValidEmail } from "../../../global/utils/validator";
import { useAuth } from "../../../application/hook/useAuth";
import { IUser } from "../../../application/types/user";
import { useNavigate } from "react-router-dom";

interface Props {}

export const ModalSignUp = ({}: Props) => {
  const { signUp } = useAuth();
  const [name, setName] = useState<string>("");
  const { showModal, hideModal } = useModal();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (!accept) {
        setError("It is necessary to accept the terms");
        return;
      }
      if (!name || !email || !password || !confirmPassword) {
        setError("Please fill in all fields");
        return;
      }
      if (!isValidEmail(email)) {
        setError("Please fill in the correct e-mail");
        return;
      }
      if (!areEqual(password, confirmPassword)) {
        setError("Password and confirm password must be the same");
        return;
      }
      const newUser: IUser = { name, email, password, avatar: "", wallet: {} };
      signUp(newUser);
      navigate("/private");
      hideModal();
    },
    [name, email, password, confirmPassword, accept]
  );

  const handleOnChange = () => {
    setAccept(!accept);
  };
  const handleSignInModal = () => {
    showModal({
      body: <ModalSignIn />,
    });
  };
  return (
    <div>
      <h4 className="center ">
        Sign UP to{" "}
        <span className="w700">
          <span>Coin</span>Synch
        </span>
      </h4>
      <DividerStyled marginTop="24px" marginBottom="24px" />

      <form onSubmit={handleSubmit}>
        <InputComponent
          id="name"
          type="text"
          value={name}
          onChange={setName}
          error={error}
          placeholder="Name"
          Icon={FiUser}
        />
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
        <InputComponent
          id="password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          error={error}
          placeholder="Password"
          Icon={FiLock}
        />
        <CheckboxComponent checked={false} onChange={handleOnChange}>
          I have read and accept the{" "}
          <b>Privacy Policy and Terms of User Sign up.</b>
        </CheckboxComponent>
        {error && <div className="text-label center">{error}</div>}
        <ButtonComponent color="primary" size="medium" className="full-width">
          Sign up
        </ButtonComponent>
        <div className="full-width center text-small-label">
          <span
            className="w700 pointer center full-width"
            onClick={handleSignInModal}
          >
            Sign in to <span className="color-primary">Coin</span>
            <span className="color-sec-4">Synch</span>
          </span>
        </div>
      </form>
    </div>
  );
};
