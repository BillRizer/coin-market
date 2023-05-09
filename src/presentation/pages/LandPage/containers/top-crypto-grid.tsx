import React, { useState } from "react";
import { IconComponent } from "../../../shared/components/Icon";
import { ButtonComponent } from "../../../shared/components/Button";
import * as S from "./top-crypto-grid.style";
import { GridComponent } from "../../../shared/components/Grid";
import { Hidden, Visible, useScreenClass } from "react-grid-system";
import {
  ICrytoAbbrev,
  getCryptoIconUsingAbrev,
} from "../../../../application/constants/crypto";
import { NumberCotationComponent } from "../../../shared/components/NumberCotation";
import { ICryptos } from "../../../../application/types/crypto";
import { convertToCurrencyFormat } from "../../../../global/utils/convert-to-currency";
import { ModalSignUp } from "../../../shared/dialogs/modal-signup";
import { useModal } from "../../../../application/hook/modal";

interface Props {
  cryptos?: ICryptos;
}
export const TopCryptoGridContainer = ({ cryptos }: Props) => {
  const currentScreen = useScreenClass();
  const [showMore, setShowMore] = useState<boolean>(false);
  const isMobile = currentScreen == "xs";
  const isTablet = currentScreen == "sm";
  const { showModal } = useModal();
  const handleSignInModal = () => {
    showModal({
      body: <ModalSignUp />,
    });
  };

  const getCryptosKey = () => {
    if (!cryptos) return [];
    const arr = Object.keys(cryptos);
    const totalItens = !showMore ? 3 : arr.length;
    return arr.slice(0, totalItens);
  };

  return (
    <>
      <S.Content style={{ marginLeft: "-24px", marginRight: "-24px" }}>
        <GridComponent
          showHeader={isMobile ? false : true}
          header={[
            { label: "#", size: "0.4fr" },
            { label: "Crypto", size: "1fr" },
            { label: "Price", size: "1fr" },
            { label: "Change", size: "1fr" },
            { label: "Trade", size: "0.2fr" },
          ]}
          mobileCols="1fr"
        >
          {cryptos ? (
            getCryptosKey().map((index, k) => (
              <S.Line key={k}>
                <Hidden xs>
                  <div className="text-label">0{k + 1}</div>
                </Hidden>
                <S.ItemCrypto>
                  <IconComponent
                    marginRight={isMobile ? "8px" : "16px"}
                    Icon={getCryptoIconUsingAbrev(index as ICrytoAbbrev)}
                    size={isMobile ? "24px" : "32px"}
                  ></IconComponent>{" "}
                  <div className="text-label">
                    {cryptos[index].label}{" "}
                    {cryptos[index].abbreviated.toUpperCase()}
                  </div>
                </S.ItemCrypto>
                <S.ItemPrice>
                  <Visible xs>
                    <div className="text-label title">Price</div>
                  </Visible>
                  <div className="text-label ">
                    {convertToCurrencyFormat(
                      cryptos[index].unit,
                      "USD",
                      "en-US"
                    )}
                  </div>
                </S.ItemPrice>

                <S.ItemChange>
                  <Visible xs>
                    <div className="text-label">Change</div>
                  </Visible>
                  <NumberCotationComponent
                    className="text-label"
                    showSignal
                    num={cryptos[index].change}
                    sufix="%"
                  />
                </S.ItemChange>
                <Hidden xs>
                  <S.Actions>
                    <ButtonComponent
                      color="tertiary"
                      size="small"
                      label="Buy"
                      isResponsive
                      onClick={handleSignInModal}
                    ></ButtonComponent>
                  </S.Actions>
                </Hidden>
              </S.Line>
            ))
          ) : (
            <div className="text-label full-width">Could not connect to api</div>
          )}
        </GridComponent>
        <div
          className="text-label color-primary center"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {cryptos &&
            Object.keys(cryptos).length > 3 &&
            (!showMore ? (
              <span className="pointer">
                View more <span style={{ fontSize: "16px" }}>+ </span>
              </span>
            ) : (
              <span className="pointer">View less</span>
            ))}
        </div>
      </S.Content>
    </>
  );
};
