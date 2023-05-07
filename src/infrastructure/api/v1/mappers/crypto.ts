import {
  ICrypto,
  ICryptos,
  IHistorygram,
} from "../../../../application/types/crypto";
import { ICryptosDto } from "../dtos/crypto.dto";

export const MapperFromApiCrypto = (cryptoFromApi: ICryptosDto): ICryptos => {
  let data: ICryptos = {};
  for (const crypto of cryptoFromApi) {
    
    
    const parsedHistorygram: Array<IHistorygram> = crypto.historygram.map(
      ({ amt, name, pv, uv }) => ({ amt, name, pv, uv })
    );
    const indexName = crypto.abbreviated.toLowerCase();
    const { abbreviated, change, id, label, unit } = crypto;
    data[indexName] = {
      abbreviated,
      change,
      historygram: parsedHistorygram,
      id,
      label,
      unit,
    };
  }

  return data;
};
