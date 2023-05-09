import {
  ICrypto,
  ICryptos,
  IHistorygram,
  IMarqueeCotations,
} from "../../../../application/types/crypto";
import { ICryptosDto, IMarqueeCotationsDto } from "../dtos/crypto.dto";

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
export const MapperFromApiCotations = (
  cryptoFromApi: IMarqueeCotationsDto
): IMarqueeCotations => {
  const data: IMarqueeCotations = cryptoFromApi.map((c) => {
    return {
      change: c.change,
      label: c.label,
      value: c.value,
    };
  });
  return data;
};
