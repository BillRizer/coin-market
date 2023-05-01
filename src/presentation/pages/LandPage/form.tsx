import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { JumbotronComponent } from "../../shared/components/Jumbotron";
import { ButtonComponent } from "../../shared/components/Button";
import { InputComponent } from "../../shared/components/Input";

export const Form = ({}) => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <JumbotronComponent
            legend="Lorem ipsum "
            title="Lorem ipsum "
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
          />
        </Col>
        <Col lg={6}>
          <Col lg={8} push={{ lg: 2 }}>
            <InputComponent
              id="email"
              label="E-mail"
              type="text"
              placeholder="Email"
              value=""
              onChange={() => {}}
            ></InputComponent>
            <ButtonComponent
              size="medium"
              color="primary"
              className="full-width"
            >
              Sign up now
            </ButtonComponent>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
