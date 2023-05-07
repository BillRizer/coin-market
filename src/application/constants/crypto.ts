import iconBitcoin from "../../assets/icons/icon-bitcoin.svg";
import iconEthereum from "../../assets/icons/icon-ethereum.svg";
import iconCardano from "../../assets/icons/icon-cardano.svg";
import iconSolana from "../../assets/icons/icon-solana.svg";
import iconUsdcoin from "../../assets/icons/icon-usdcoin.svg";

export type ICrytoAbbrev = "btc" | "eth" | "ada" | "sol" | "usdc";

export const getCryptoIconUsingAbrev = (abrrev: ICrytoAbbrev) => {
  const dict = {
    btc: iconBitcoin,
    eth: iconEthereum,
    ada: iconCardano,
    sol: iconSolana,
    usdc: iconUsdcoin,
  };
  return dict[abrrev];
};
