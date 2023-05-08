import React, { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "../../../shared/components/Button";

import IconMinimalistBitcoin from "../../../../assets/icons/icon-m-bitcoin.svg";
import IconMinimalistCircle from "../../../../assets/icons/icon-m-circle.svg";
import IconMinimalistComputer from "../../../../assets/icons/icon-m-computer.svg";
import IconMinimalistChart from "../../../../assets/icons/icon-m-chart.svg";
import { useModal } from "../../../../application/hook/modal";
import { TileComponent } from "../../../shared/components/Tiles/Tile";
import * as S from "./cards.style";
import { Row, Container, Hidden } from "react-grid-system";
import { JumbotronComponent } from "../../../shared/components/Jumbotron";
import { ModalSignIn } from "../../../shared/dialogs/modal-signin";

export const CardContainer = () => {
  const { showModal, hideModal } = useModal();

  const tiles = [
    {
      icon: IconMinimalistBitcoin,
      legend: "For your company",
      title: "Crypto Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ",
    },
    {
      icon: IconMinimalistCircle,
      legend: "For your company",
      title: "Crypto Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ",
    },
    {
      icon: IconMinimalistChart,
      legend: "For your company",
      title: "Crypto Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ",
    },
    {
      icon: IconMinimalistComputer,
      legend: "For your company",
      title: "Crypto Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, ",
    },
  ];

  const handleSignInModal = () => {
    showModal({
      body: <ModalSignIn />,
    });
  };

  const tileList = useCallback(() => {
    return tiles.map((e, k) => (
      <TileComponent
        key={k}
        style={{
          gridArea: `card${k}`,
        }}
        Icon={e.icon}
        legend={e.legend}
        title={e.title}
        text={e.text}
      ></TileComponent>
    ));
  }, []);

  return (
    <S.ContainerCards>
      <Container>
        <Row>
          <S.SectionCards>
            <S.SectionCardsLeft> {tileList()}</S.SectionCardsLeft>
            <S.SectionCardsRight>
              <JumbotronComponent
                legend="Lorem ipsum "
                title="Lorem ipsum "
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
              >
                <Hidden xs>
                  <ButtonComponent
                    size="medium"
                    color="primary"
                    onClick={() => handleSignInModal()}
                  >
                    Sign up now
                  </ButtonComponent>
                </Hidden>
              </JumbotronComponent>
            </S.SectionCardsRight>
          </S.SectionCards>
        </Row>
      </Container>
    </S.ContainerCards>
  );
};
