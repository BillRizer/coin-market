import { getUserFromApi } from "../../infrastructure/api/v1/user";
import { IUser } from "../types/user";

export const getUserFromService = async (): Promise<IUser | null> => {
  const user = await getUserFromApi();

  // const user: IUser = {
  //   avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
  //   email: "service@asd.com",
  //   name: "service",
  //   password: "",
  // };
  
  return user;
};
