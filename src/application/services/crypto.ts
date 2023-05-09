import { ICryptos, IMarqueeCotations } from "../types/crypto";

import { getCotationsFromApi, getCryptoFromApi } from "../../infrastructure/api/v1/crypto";

export const getCryptosFromService = async (): Promise<ICryptos | null> => {
  return await getCryptoFromApi();
};

export const getCotationsFromService =
  async (): Promise<IMarqueeCotations | null> => {
    return await getCotationsFromApi();
  };
