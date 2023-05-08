import React, { useCallback, useEffect, useState } from "react";

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
import {
  Col,
  Row,
  Container,
  useScreenClass,
  Hidden,
  Visible,
} from "react-grid-system";
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
import { ICryptos } from "../../../application/types/crypto";
import {
  ICrytoAbbrev,
  getCryptoIconUsingAbrev,
} from "../../../application/constants/crypto";
import { IWallet } from "../../../application/types/wallet";

export const DashboardPage = () => {
  const { user, signOut, signIn } = useAuth();
  const [crypto, setCrypto] = useState<ICryptos>();
  const [wallet, setWallet] = useState<IWallet>();
  const [balance, setBalance] = useState<number | null>(null);

  const currentScreen = useScreenClass();
  const isMobile = currentScreen == "xs";
  const isTablet = currentScreen == "sm";
  useEffect(() => {
    if (wallet == null) {
      if (user) {
        setWallet(user.wallet);
      }
      getCryptosFromApi().then((data) => {
        if (data) {
          setCrypto(data);
        }
      });
    }
    if (wallet && crypto) {
      calcTotalBalance(wallet, crypto);
    }
    // calcTotalBalance(wallet, crypto);
  }, [wallet, crypto]);

  const calcTotalBalance = useCallback(
    (wallet: IWallet, crypto: ICryptos) => {
      console.log(wallet);

      let total = 0;
      for (const index of Object.keys(wallet)) {
        total += wallet[index].amount * crypto[index].unit;
      }
      setBalance(total);
      console.log(total);
    },
    [wallet, crypto, setBalance]
  );
  const handleSignIn = () => {
    signIn({ email: "AYUsdhas@asudhas.com", password: "asd" });
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
          <Col lg={6} md={12} sm={4} style={{ marginTop: "32px" }}>
            <TileAComponent
              color="red"
              icon={IconMinimalistScale}
              leftText="Balance in US$"
              rightText={convertToCurrencyFormat(
                balance || 0,
                "USD",
                "en-US",
                true
              )}
            ></TileAComponent>
          </Col>
          <Col lg={3} md={4} sm={2} xs={2} style={{ marginTop: "32px" }}>
            <TileChartComponent
              icon={getCryptoIconUsingAbrev("eth")}
              chartData={crypto ? crypto["eth"].historygram : []}
              title="Daily Variation"
              cryptoAbbreviation="ETH"
              cryptoValue={crypto ? crypto["eth"].change : 0}
            />
          </Col>
          <Col lg={3} md={4} sm={2} xs={2} style={{ marginTop: "32px" }}>
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
                  showHeader={isMobile ? false : true}
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
                        <Hidden xs>
                          <div className="text-label">0{k + 1}</div>
                        </Hidden>
                        <S.ItemCrypto>
                          <IconComponent
                            marginRight={isMobile ? "8px" : "16px"}
                            Icon={getCryptoIconUsingAbrev(
                              index as ICrytoAbbrev
                            )}
                            size={isMobile ? "16px" : "32px"}
                          ></IconComponent>{" "}
                          <div className="text-label">
                            {crypto[index].label}{" "}
                            {crypto[index].abbreviated.toUpperCase()}
                          </div>
                        </S.ItemCrypto>
                        <S.ItemHolding>
                          <Visible xs>
                            <div className="text-label title">Holding</div>
                          </Visible>
                          <div className="text-label ">
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
                          <Visible xs>
                            <div className="text-label">Change</div>
                          </Visible>
                          <NumberCotationComponent
                            className="text-label"
                            showSignal
                            num={crypto[index].change}
                            sufix="%"
                          />
                        </S.ItemChange>
                        <S.ItemHolding>
                          {isMobile ? (
                            <ButtonComponent></ButtonComponent>
                          ) : (
                            <IconComponent
                              Icon={iconTrade}
                              size="24px"
                            ></IconComponent>
                          )}
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
