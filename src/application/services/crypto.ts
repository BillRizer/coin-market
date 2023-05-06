import { ICrypto, ICryptos } from "../types/crypto";
import iconBitcoin from "../../assets/icons/icon-bitcoin.svg";
import iconEthereum from "../../assets/icons/icon-ethereum.svg";
import iconCardano from "../../assets/icons/icon-cardano.svg";
import iconSolana from "../../assets/icons/icon-solana.svg";
import iconUsdcoin from "../../assets/icons/icon-usdcoin.svg";

export const getCryptos = async (): Promise<ICryptos | null> => {
  const a: ICryptos = {
    bitcoin: { abbreviated: "BTC", label: "Bitcoin", icon: iconBitcoin },
    ethereum: { abbreviated: "ETH", label: "Ethereum", icon: iconEthereum },
    cardano: { abbreviated: "ADA", label: "Cardano", icon: iconCardano },
    solana: { abbreviated: "SOL", label: "Solana", icon: iconSolana },
    usdcoin: { abbreviated: "USDC", label: "USD Coin", icon: iconUsdcoin },
  };

  return a;
};
