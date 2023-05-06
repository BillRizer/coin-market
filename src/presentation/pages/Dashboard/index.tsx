import React from "react";

import IconMinimalistWallet from "../../../assets/icons/icon-m-wallet.svg";
import IconMinimalistScale from "../../../assets/icons/icon-m-scale.svg";
import IconEthereum from "../../../assets/icons/icon-ethereum.svg";
import IconPlus from "../../../assets/icons/icon-plus.svg";
import ImageNews from "../../../assets/img/news.png";
import iconBitcoin from "../../../assets/icons/icon-bitcoin.svg";
import iconTrade from "../../../assets/icons/icon-trade.svg";
import iconEthereum from "../../../assets/icons/icon-ethereum.svg";
import iconCardano from "../../../assets/icons/icon-cardano.svg";
import iconSolana from "../../../assets/icons/icon-solana.svg";

import * as S from "./style";
import { Col, Row, Container } from "react-grid-system";
import { TitleRowComponent } from "../../shared/components/TitleRow";
import { ButtonComponent } from "../../shared/components/Button";
import { GenericBorderStyle } from "../../shared/components-styled/GenericBorder";
import { useAuth } from "../../../application/hook/useAuth";
import { TileAComponent } from "../../shared/components/Tiles/TileA";
import { TileChartComponent } from "../../shared/components/Tiles/TileChart";
import { TileNewsComponent } from "../../shared/components/Tiles/TileNews";
import { TableStyled } from "../../shared/components-styled/Table";
import { IconComponent } from "../../shared/components/Icon";
import { GridComponent } from "../../shared/components/Grid";
import { NumberCotationComponent } from "../../shared/components/NumberCotation";

export const DashboardPage = () => {
  const { user, signOut, signIn } = useAuth();

  const table = [
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
  ];

  const Tile = () => {
    return (
      <Col lg={6} md={12} sm={4}>
        <GenericBorderStyle>
          <Row style={{ height: "112px" }}>
            <Col lg={6} sm={2}>
              Balance in US$
            </Col>
            <Col lg={6} sm={2}>
              R$ 12,837.13
            </Col>
          </Row>
        </GenericBorderStyle>
      </Col>
    );
  };

  const handleSignIn = () => {
    signIn({ email: "AYUsdhas@asudhas.com", password: "asd" });
    console.log(user);
  };

  return (
    <div>
      <Container>
        <Row>
          {/* <Tile></Tile>
           */}
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
              data={[{}]}
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
              <S.Content>
                <GridComponent
                  header={[
                    { label: "#", size: "0.2fr" },
                    { label: "Crypto", size: "1fr" },
                    { label: "Holdings", size: "1fr" },
                    { label: "Change", size: "1fr" },
                    { label: "Trade", size: "0.2fr" },
                  ]}
                >
                  {table?.length > 0 &&
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
                            {row.holding.cotation}
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
                    ))}
                </GridComponent>

                <TableStyled>
                  <thead>
                    <tr>
                      <td>#</td>
                      <td>Crypto</td>
                      <td>Holdings</td>
                      <td>Change</td>
                      <td className="mini">Trade</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="mini">01</td>
                      <td className="inline icon">
                        <IconComponent
                          Icon={iconBitcoin}
                          size="large"
                        ></IconComponent>{" "}
                        Bitcoin
                      </td>
                      <td>eth</td>
                      <td>01</td>
                      <td className="mini">
                        <IconComponent
                          Icon={iconTrade}
                          size="medium"
                        ></IconComponent>
                      </td>
                    </tr>
                    <tr>
                      <td className="mini">01</td>
                      <td className="inline icon">
                        <IconComponent
                          Icon={iconEthereum}
                          size="large"
                        ></IconComponent>{" "}
                        Ethereum ETH
                      </td>
                      <td>eth</td>
                      <td>01</td>
                      <td className="mini">
                        <IconComponent
                          Icon={iconTrade}
                          size="medium"
                        ></IconComponent>
                      </td>
                    </tr>
                    <tr>
                      <td className="mini">01</td>
                      <td className="inline icon">
                        <IconComponent
                          Icon={iconCardano}
                          size="large"
                        ></IconComponent>{" "}
                        Cardano ADA
                      </td>
                      <td>eth</td>
                      <td>01</td>
                      <td className="mini">
                        <IconComponent
                          Icon={iconTrade}
                          size="medium"
                        ></IconComponent>
                      </td>
                    </tr>
                    <tr>
                      <td className="mini">01</td>
                      <td className="inline icon">
                        <IconComponent
                          Icon={iconSolana}
                          size="large"
                        ></IconComponent>{" "}
                        Solana SOL
                      </td>
                      <td>eth</td>
                      <td>01</td>
                      <td className="mini">
                        <IconComponent
                          Icon={iconTrade}
                          size="medium"
                        ></IconComponent>
                      </td>
                    </tr>
                  </tbody>
                </TableStyled>
              </S.Content>
            </S.MyWalletContainer>
          </Col>
        </Row>
        <button onClick={handleSignIn}>login</button>
      </Container>
    </div>
  );
};
