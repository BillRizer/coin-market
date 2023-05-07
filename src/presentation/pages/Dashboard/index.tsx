import React from "react";

import IconMinimalistWallet from "../../../assets/icons/icon-m-wallet.svg";
import IconMinimalistScale from "../../../assets/icons/icon-m-scale.svg";
import IconEthereum from "../../../assets/icons/icon-ethereum.svg";
import IconPlus from "../../../assets/icons/icon-plus.svg";
import ImageNews from "../../../assets/img/news.png";
import IconNotFoundWallet from "../../../assets/icons/icon-notfound-wallet.svg";
import iconBitcoin from "../../../assets/icons/icon-bitcoin.svg";
import iconTrade from "../../../assets/icons/icon-trade.svg";
import iconEthereum from "../../../assets/icons/icon-ethereum.svg";
import iconCardano from "../../../assets/icons/icon-cardano.svg";
import iconSolana from "../../../assets/icons/icon-solana.svg";

import * as S from "./style";
import { Col, Row, Container } from "react-grid-system";
import { TitleRowComponent } from "../../shared/components/TitleRow";
import { ButtonComponent } from "../../shared/components/Button";
import { useAuth } from "../../../application/hook/useAuth";
import { TileAComponent } from "../../shared/components/Tiles/TileA";
import { TileChartComponent } from "../../shared/components/Tiles/TileChart";
import { TileNewsComponent } from "../../shared/components/Tiles/TileNews";
import { IconComponent } from "../../shared/components/Icon";
import { GridComponent } from "../../shared/components/Grid";
import { NumberCotationComponent } from "../../shared/components/NumberCotation";
import { convertToCurrencyFormat } from "../../../global/utils/convert-to-currency";
import { NotFoundComponent } from "../../shared/components/NotFound";

export const DashboardPage = () => {
  const { user, signOut, signIn } = useAuth();

  let table = [
    {
      id: 1,
      crypto: {
        icon: iconBitcoin,
        label: "Bitcoin BTC",
      },
      holding: {
        total: 123456,
        cotation: "434 BTC",
      },
      change: 1.99,
    },
    {
      id: 2,
      crypto: {
        icon: iconEthereum,
        label: "Ethereum ETH",
      },
      holding: {
        total: 188456,
        cotation: "434 BTC",
      },
      change: -1.99,
    },
    {
      id: 3,
      crypto: {
        icon: iconCardano,
        label: "Cardano ADA",
      },
      holding: {
        total: 23456,
        cotation: "434 BTC",
      },
      change: 1.99,
    },
    {
      id: 4,
      crypto: {
        icon: iconSolana,
        label: "Solana SOL",
      },
      holding: {
        total: 33331,
        cotation: "434 BTC",
      },
      change: -11.619,
    },
  ];
  table = [];
  const dataChart = [
    {
      name: "Page A",
      uv: 2000,
      pv: 2400,
      amt: 6400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 1490,
      pv: 1300,
      amt: 1100,
    },
  ];

  const handleSignIn = () => {
    signIn({ email: "AYUsdhas@asudhas.com", password: "asd" });
    console.log(user);
  };

  return (
    <div>
      <Container>
        <Row>
         
          <Col lg={6} md={12} sm={4}>
            <TileAComponent
              color="red"
              icon={IconMinimalistScale}
              leftText="Balance in US$"
              rightText=" R$ 12,837.13"
            ></TileAComponent>
          </Col>
          <Col lg={3} md={4} sm={2} xs={2}>
            <TileChartComponent
              icon={IconEthereum}
              data={dataChart}
              title=""
              crypto=""
              cryptoValue={0}
            />
          </Col>
          <Col lg={3} md={4} sm={2} xs={2}>
            <TileNewsComponent
              image={ImageNews}
              data={[{}]}
              title=""
              crypto=""
              cryptoValue={0}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={8} sm={4}>
            <S.MyWalletContainer className="generic-box-shadow">
              <TitleRowComponent title="My Wallet" icon={IconMinimalistWallet}>
                <ButtonComponent
                  color="primary"
                  size="small"
                  Icon={IconPlus}
                  label="Add crypto"
                  isResponsive
                ></ButtonComponent>
              </TitleRowComponent>
              <S.Content >
                <GridComponent
                  header={[
                    { label: "#", size: "0.2fr" },
                    { label: "Crypto", size: "1fr" },
                    { label: "Holdings", size: "1fr" },
                    { label: "Change", size: "1fr" },
                    { label: "Trade", size: "0.2fr" },
                  ]}
                  isEmpty={table?.length === 0}
                >
                  {table?.length > 0 ? (
                    table.map((row, k) => (
                      <div key={k}>
                        <div className="text-label">0{k + 1}</div>
                        <S.ItemCrypto>
                          <IconComponent
                            Icon={row.crypto.icon}
                            size="large"
                          ></IconComponent>{" "}
                          <div className="text-label">{row.crypto.label}</div>
                        </S.ItemCrypto>
                        <S.ItemHolding>
                          <div className="text-label">{row.holding.total}</div>
                          <div className="text-small-label">
                            {convertToCurrencyFormat(
                              row.holding.total,
                              "USD",
                              "en-US"
                            )}
                          </div>
                        </S.ItemHolding>
                        <S.ItemChange>
                          <NumberCotationComponent
                            className="text-label"
                            showSignal
                            num={row.change}
                            sufix="%"
                          />
                        </S.ItemChange>
                        <S.ItemHolding>
                          <IconComponent
                            Icon={iconTrade}
                            size="medium"
                          ></IconComponent>
                        </S.ItemHolding>
                      </div>
                    ))
                  ) : (
                    <NotFoundComponent
                      image={IconNotFoundWallet}
                      title="Nothing here yet..."
                      subTitle="Add a crypto and start earning"
                    />
                  )}
                </GridComponent>
              </S.Content>
            </S.MyWalletContainer>
          </Col>
        </Row>
        <button onClick={handleSignIn}>login</button>
      </Container>
    </div>
  );
};
