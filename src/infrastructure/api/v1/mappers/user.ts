import { IUser } from "../../../../application/types/user";
import { IUserDto } from "../dtos/user.dto";
import { IWalletDto } from "../dtos/wallet.dto";

export const MapperFromApiUser = (
  userFromApi: IUserDto,
  wallet: IWalletDto
): IUser => {
  const { avatar, email, name, password } = userFromApi;

  const data: IUser = {
    avatar,
    email,
    name,
    password,
    wallet,
  };
  return data;
};
