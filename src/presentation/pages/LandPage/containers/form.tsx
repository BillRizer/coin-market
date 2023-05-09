import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { JumbotronComponent } from "../../../shared/components/Jumbotron";
import { ButtonComponent } from "../../../shared/components/Button";
import { InputComponent } from "../../../shared/components/Input";
import * as S from "./form.style";
import { subscribeFromService } from "../../../../application/services/subscribe";
import { FiCommand, FiLoader } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

export const Form = ({}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubscribe = async () => {
    if (!email || !email.length) {
      setError("Must provide a valid email");
      return;
    }
    setIsLoading(true);
    await subscribeFromService(email);
    setEmail("")
    setIsLoading(false);
  };
  return (
    <S.Bg>
      <Container>
        <S.Container>
          <S.Left>
            <JumbotronComponent
              legend="Lorem ipsum "
              title="Lorem ipsum "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
            />
          </S.Left>
          <S.Right>
            <InputComponent
              id="email"
              label="E-mail"
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={setEmail}
              disabled={isLoading}
            ></InputComponent>

            <ButtonComponent
              size="medium"
              color="primary"
              className="full-width"
              onClick={handleSubscribe}
              disabled={isLoading}
            >
              {isLoading&&(<FaSpinner className="loading-icon" />)}
              Subscribe
            </ButtonComponent>
            {error && <S.Error>{error}</S.Error>}
          </S.Right>
        </S.Container>
      </Container>
    </S.Bg>
  );
};
