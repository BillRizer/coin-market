import React, { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "../../shared/components/Button";

import IconMinimalistBitcoin from "../../../assets/icons/icon-m-bitcoin.svg";
import IconMinimalistCircle from "../../../assets/icons/icon-m-circle.svg";
import IconMinimalistComputer from "../../../assets/icons/icon-m-computer.svg";
import IconMinimalistChart from "../../../assets/icons/icon-m-chart.svg";
import { useModal } from "../../../application/hook/modal";
import { BannerCarrouselComponent } from "../../shared/components/BannerCarrousel";
import { TileComponent } from "../../shared/components/Tiles/Tile";
import * as S from "./style";
import { Col, Row, Container, useScreenClass } from "react-grid-system";
import { JumbotronComponent } from "../../shared/components/Jumbotron";
import { Table } from "./table";
import { Form } from "./form";

export const LandPage = () => {
  const { showModal } = useModal();
  const [currentScreen, setCurrentScreen] = useState<any>(null);

  const images = [
    "https://placeimg.com/640/480/nature",
   
  ];
  const screenClass = useScreenClass();

  useEffect(() => {
    setCurrentScreen(screenClass);
    console.log(screenClass);
  }, [setCurrentScreen, screenClass]);

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

  function tileList() {
    return (
      <>
        {tiles.map((e, k) => (
          <TileComponent
            key={k}
            style={{
              marginLeft: k === 2 && currentScreen !== "sm" ? "36px" : "0px",
            }}
            Icon={e.icon}
            legend={e.legend}
            title={e.title}
            text={e.text}
          ></TileComponent>
        ))}
      </>
    );
  }
  return (
    <div>
      <Container>
        <Row>
          <BannerCarrouselComponent images={images}></BannerCarrouselComponent>
        </Row>
        <Row
          direction={
            currentScreen === "sm" || currentScreen === "md"
              ? "column-reverse"
              : "row"
          }
        >
          <Col
            lg={7}
            style={{
              padding: "0px",
              overflow: currentScreen === "sm" ? "auto" : "initial",
            }}
          >
            <S.GroupTiles
              className={currentScreen === "sm" ? "horizontal" : ""}
            >
              {tileList()}
            </S.GroupTiles>
          </Col>
          <Col xs={12} lg={4} style={{ alignItems: "center", display: "flex" }}>
            <JumbotronComponent
              legend="Lorem ipsum "
              title="Lorem ipsum "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
            >
              <ButtonComponent size="medium" color="primary">
                Sign up now
              </ButtonComponent>
            </JumbotronComponent>
          </Col>
        </Row>
        <Row>
          <div className="block-130"></div>
          <h3 className="center full-width">Top Cryptos</h3>
          <Table></Table>
          <Form></Form>
        </Row>
      </Container>
    </div>
  );
};
