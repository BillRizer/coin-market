import React, { useEffect, useState } from "react";

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
import { Col, Row, Container, useScreenClass } from "react-grid-system";
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
import { getCryptosFromApi } from "../../../application/services/crypto";
import { ICrypto, ICryptos } from "../../../application/types/crypto";
import {
  ICrytoAbbrev,
  getCryptoIconUsingAbrev,
} from "../../../application/constants/crypto";
import { IWallet } from "../../../application/types/wallet";

export const DashboardPage = () => {
  const { user, signOut, signIn } = useAuth();
  const [crypto, setCrypto] = useState<ICryptos>();
  const [wallet, setWallet] = useState<IWallet>({});
  const currentScreen = useScreenClass();
  useEffect(() => {
    if (user) {
      setWallet(user.wallet);
    }
    getCryptosFromApi().then((data) => {
      if (data) {
        setCrypto(data);
      }
    });
  }, []);
  console.log(user);
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
  ];

  const handleSignIn = () => {
    signIn({ email: "AYUsdhas@asudhas.com", password: "asd" });
    console.log(user);
  };

  const calcHolding = (cotation: number, amount: number): number => {
    return cotation * amount;
  };
  const calcHoldingText = (cotation: number, amount: number): string => {
    return convertToCurrencyFormat(
      calcHolding(cotation, amount),
      "USD",
      "en-US"
    );
  };
  const cotationText = (cotation: number, index: ICrytoAbbrev): string => {
    return `${cotation} ${index.toUpperCase()}`;
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
              rightText={convertToCurrencyFormat(63837.12, "BRL", "pt-BR")}
            ></TileAComponent>
          </Col>
          <Col lg={3} md={4} sm={2} xs={2}>
            <TileChartComponent
              icon={getCryptoIconUsingAbrev("eth")}
              chartData={crypto ? crypto["eth"].historygram : []}
              title="Daily Variation"
              cryptoAbbreviation="ETH"
              cryptoValue={crypto ? crypto["eth"].change : 0}
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
              <S.Content>
                <GridComponent
                  showHeader={currentScreen !== "xs" ? true : false}
                  header={[
                    { label: "#", size: "0.2fr" },
                    { label: "Crypto", size: "1fr" },
                    { label: "Holdings", size: "1fr" },
                    { label: "Change", size: "1fr" },
                    { label: "Trade", size: "0.2fr" },
                  ]}
                >
                  {wallet && crypto ? (
                    Object.keys(wallet).map((index, k) => (
                      <div key={k}>
                        <div className="text-label">0{k + 1}</div>
                        <S.ItemCrypto>
                          <IconComponent
                            marginRight="16px"
                            Icon={getCryptoIconUsingAbrev(
                              index as ICrytoAbbrev
                            )}
                            size="32px"
                          ></IconComponent>{" "}
                          <div className="text-label">
                            {crypto[index].label}{" "}
                            {crypto[index].abbreviated.toUpperCase()}
                          </div>
                        </S.ItemCrypto>
                        <S.ItemHolding>
                          <div className="text-label">
                            {calcHoldingText(
                              crypto[index].unit,
                              wallet[index].amount
                            )}
                          </div>
                          <div className="text-small-label">
                            {cotationText(
                              wallet[index].amount,
                              index as ICrytoAbbrev
                            )}
                          </div>
                        </S.ItemHolding>
                        <S.ItemChange>
                          <NumberCotationComponent
                            className="text-label"
                            showSignal
                            num={crypto[index].change}
                            sufix="%"
                          />
                        </S.ItemChange>
                        <S.ItemHolding>
                          <IconComponent
                            Icon={iconTrade}
                            size="24px"
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
