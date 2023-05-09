import axios from "axios";
import { apiCap } from "./config/api";

export const _getCryptoFromApi = async (): Promise<any | null> => {
  try {
    return apiCap.get("exchangerate/BTC?invert=false", {
      headers: {
        "X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
