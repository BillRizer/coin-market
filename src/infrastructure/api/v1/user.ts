import { api } from "./config/api";
import { IUser } from "./dtos/user.dto";

export const getUserFromApi = async (): Promise<IUser | null> => {
  try {
    return (await api.get("user")).data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
