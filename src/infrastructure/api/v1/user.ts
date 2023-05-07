import { api } from "./config/api";
import { IUser } from "../../../application/types/user";
import { MapperFromApiUser } from "./mappers/user";

export const getUserFromApi = async (): Promise<IUser | null> => {
  try {
    const userfromApi = (await api.get("user")).data.data;
    const walletfromApi = (await api.get("my-wallet")).data.data;
    return MapperFromApiUser(userfromApi, walletfromApi);
  } catch (error) {
    console.log(error);
    return null;
  }
};
