export interface IUserBasic {
  email: string;
  password: string;
}
export interface IUser extends IUserBasic {
  name: string;
  avatar: string;
}
