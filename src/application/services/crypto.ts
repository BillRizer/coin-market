import { ICryptos } from "../types/crypto";

import { getCryptoFromApi } from "../../infrastructure/api/v1/crypto";

export const getCryptosFromApi = async (): Promise<ICryptos | null> => {
  return await getCryptoFromApi();
};
