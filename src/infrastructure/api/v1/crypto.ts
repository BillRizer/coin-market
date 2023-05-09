import { ICryptos, IMarqueeCotations } from "../../../application/types/crypto";
import { api } from "./config/api";
import { MapperFromApiCotations, MapperFromApiCrypto } from "./mappers/crypto";

export const getCryptoFromApi = async (): Promise<ICryptos | null> => {
  try {
    const fromApi = await api.get("cryptos");

    return MapperFromApiCrypto(fromApi.data.data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const getCotationsFromApi =
  async (): Promise<IMarqueeCotations | null> => {
    try {
      const fromApi = await api.get("cotations");

      return MapperFromApiCotations(fromApi.data.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
