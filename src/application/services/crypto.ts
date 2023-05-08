import { ICryptos } from "../types/crypto";

import { getCryptoFromApi } from "../../infrastructure/api/v1/crypto";

export const getCryptosFromService = async (): Promise<ICryptos | null> => {
  return await getCryptoFromApi();
};
