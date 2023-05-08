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
import {  getCryptosFromService } from "../../../application/services/crypto";
import { ICryptos, IListCrypto } from "../../../application/types/crypto";
import {
  ICrytoAbbrev,
  getCryptoIconUsingAbrev,
} from "../../../application/constants/crypto";
import { IWallet } from "../../../application/types/wallet";
import { useModal } from "../../../application/hook/modal";
import { ModalTransferCrypto } from "./modal-transfer-crypto";
import { ModalAddCrypto } from "./modal-add-crypto";

export const DashboardPage = () => {
  const { user } = useAuth();
  const [crypto, setCrypto] = useState<ICryptos>();
  const [wallet, setWallet] = useState<IWallet>();
  const [balance, setBalance] = useState<number | null>(null);
  const { showModal, hideModal } = useModal();

  const currentScreen = useScreenClass();
  const isMobile = currentScreen == "xs";
  const isTablet = currentScreen == "sm";
  useEffect(() => {
    if (wallet == null) {
      if (user) {
        setWallet(user.wallet);
      }
      getCryptosFromService().then((data) => {
        if (data) {
          setCrypto(data);
        }
      });
    }
    if (wallet && crypto) {
      let total = 0;
      for (const index of Object.keys(wallet)) {
        total += wallet[index].amount * crypto[index].unit;
      }
      setBalance(total);
      console.log("update total balance");
    }
    // calcTotalBalance(wallet, crypto);
  }, [wallet, crypto, balance]);

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

  const callbackTradeCryptoModal = (
    quantity: number,
    transfer: string,
    cryptoAbbrev: ICrytoAbbrev
  ) => {
    if (!crypto || !wallet) {
      return;
    }
    let amount = quantity / crypto[cryptoAbbrev].unit;
    const walletAmount =
      crypto[cryptoAbbrev].unit * wallet[cryptoAbbrev].amount;
    if (amount > walletAmount) {
      amount = walletAmount;
    }
    wallet[cryptoAbbrev].amount -= amount;
    // updateWallet(wallet, cryptoAbbrev, quantity);
    console.log(wallet, cryptoAbbrev, quantity);
    setWallet(wallet);
    setBalance((balance || 0) - amount);
    hideModal();
  };

  const handleTradeModal = (abrev: ICrytoAbbrev, label: string) => {
    showModal({
      body: (
        <ModalTransferCrypto
          callback={callbackTradeCryptoModal}
          cryptoAbbrev={abrev}
        />
      ),
    });
  };

  const callbackAddCryptoModal = (
    quantity: number,
    cryptoAbbrev: ICrytoAbbrev
  ) => {
    if (!crypto || !wallet) {
      return;
    }

    const amount = quantity / crypto[cryptoAbbrev].unit;
    wallet[cryptoAbbrev].amount += amount;
    console.log("depois", wallet);
    setWallet(wallet);
    setBalance((balance || 0) + amount);
    hideModal();
  };
  const handleAddModal = () => {
    if (!crypto || !wallet) {
      return;
    }
    const options = Object.keys(crypto).map((index) => ({
      abbrev: index,
      label: crypto[index].label,
      icon: getCryptoIconUsingAbrev(index as ICrytoAbbrev),
    }));
    showModal({
      body: (
        <ModalAddCrypto callback={callbackAddCryptoModal} crypto={options} />
      ),
    });
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
                  iconMarginRight="8px"
                  label="Add crypto"
                  isResponsive
                  onClick={() => handleAddModal()}
                ></ButtonComponent>
              </TitleRowComponent>
              <S.Content style={{ marginLeft: "-24px", marginRight: "-24px" }}>
                <GridComponent
                  showHeader={isMobile || !balance ? false : true}
                  isEmpty={!balance}
                  header={[
                    { label: "#", size: "0.2fr" },
                    { label: "Crypto", size: "1fr" },
                    { label: "Holdings", size: "1fr" },
                    { label: "Change", size: "1fr" },
                    { label: "Trade", size: "0.2fr" },
                  ]}
                >
                  {wallet && crypto ? (
                    Object.keys(wallet).map(
                      (index, k) =>
                        wallet[index].amount > 0 && (
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
                                  onClick={() =>
                                    handleTradeModal(
                                      index as ICrytoAbbrev,
                                      crypto[index].label
                                    )
                                  }
                                ></IconComponent>
                              )}
                            </S.ItemHolding>
                          </div>
                        )
                    )
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
      </Container>
    </div>
  );
};
