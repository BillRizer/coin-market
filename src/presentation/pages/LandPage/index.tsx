import React, { useCallback, useEffect, useState } from "react";

import IconMinimalistBitcoin from "../../../assets/icons/icon-m-bitcoin.svg";
import IconMinimalistCircle from "../../../assets/icons/icon-m-circle.svg";
import IconMinimalistComputer from "../../../assets/icons/icon-m-computer.svg";
import IconMinimalistChart from "../../../assets/icons/icon-m-chart.svg";
import { useModal } from "../../../application/hook/modal";
import { BannerCarrouselComponent } from "../../shared/components/BannerCarrousel";
import { TileComponent } from "../../shared/components/Tiles/Tile";
import * as S from "./style";
import { Col, Row, Container, useScreenClass, Hidden } from "react-grid-system";
import { TopCryptoGridContainer } from "./containers/top-crypto-grid";
import { Form } from "./containers/form";
import { ModalSignIn } from "../../shared/dialogs/modal-signin";
import { ICryptos } from "../../../application/types/crypto";
import { getCryptosFromService } from "../../../application/services/crypto";
import { CardContainer } from "./containers/cards";
import { SpaceStyled } from "../../shared/components-styled/Space";

export const LandPage = () => {
  const { showModal, hideModal } = useModal();
  const [currentScreen, setCurrentScreen] = useState<any>(null);
  const [cryptos, setCryptos] = useState<ICryptos>();

  const images = ["https://placeimg.com/640/480/nature"];
  const screenClass = useScreenClass();

  useEffect(() => {
    setCurrentScreen(screenClass);
    getCryptosFromService().then((cryptos) => {
      console.log(cryptos);

      if (cryptos) {
        setCryptos(cryptos);
      }
    });
  }, [setCurrentScreen, screenClass]);

  const handleSignInModal = () => {
    showModal({
      body: <ModalSignIn />,
    });
  };

  return (
    <div>
      <S.SectionBanner>
        <Container>
          <BannerCarrouselComponent></BannerCarrouselComponent>
        </Container>
      </S.SectionBanner>

      <CardContainer></CardContainer>

      <Container>
        <Row>
          <SpaceStyled size="50px" />
          <h4 className="center full-width w700">Top Cryptos</h4>
          <TopCryptoGridContainer cryptos={cryptos}></TopCryptoGridContainer>
        </Row>
      </Container>
          <SpaceStyled size="50px" />
      <Form></Form>
    </div>
  );
};
