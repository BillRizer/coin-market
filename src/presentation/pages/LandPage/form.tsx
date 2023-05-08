import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { JumbotronComponent } from "../../shared/components/Jumbotron";
import { ButtonComponent } from "../../shared/components/Button";
import { InputComponent } from "../../shared/components/Input";
import * as S from "./form.style";

export const Form = ({}) => {
  return (
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
          value=""
          onChange={() => {}}
        ></InputComponent>
        <ButtonComponent size="medium" color="primary" className="full-width">
          Sign up now
        </ButtonComponent>
      </S.Right>
    </S.Container>
  );
};
