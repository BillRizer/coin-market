import { ICryptos } from "../../../application/types/crypto";
import { api } from "./config/api";
import { MapperFromApiCrypto } from "./mappers/crypto";

export const getCryptoFromApi = async (): Promise<ICryptos | null> => {
  try {
    const fromApi = await api.get("cryptos");
    console.log(fromApi.data);
    
    return MapperFromApiCrypto(fromApi.data.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
