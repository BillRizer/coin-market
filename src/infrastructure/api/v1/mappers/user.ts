import { IUser } from "../../../../application/types/user";
import * as UserDto from "../dtos/user.dto";

export const MapperFromApiUser = (userFromApi: UserDto.IUser): IUser => {
  const { avatar, email, name, password } = userFromApi;

  const data: IUser = {
    avatar,
    email,
    name,
    password,
  };
  return data;
};
