import { ICrypto } from "./crypto";

export interface IDashboardWallet {
  index: string;
  crypto: ICrypto;
  holding: {
    total: number;
    cotation: string;
  };
  change: number;
}
