import { IWallet } from "../../../../application/types/wallet";
import { IUserDto } from "../dtos/user.dto";
import { MapperFromApiUser } from "./user";

describe("MapperFromApiUser", () => {
  it("should map user from API format to internal format correctly", () => {
    const userFromApi: IUserDto = {
      id: 1,
      avatar: "https://example.com/avatar.jpg",
      email: "test@example.com",
      name: "John Doe",
      password: "password123",
    };
    const userWallet: IWallet = {
      aaa: { amount: 10 },
    };

    const mappedUser = MapperFromApiUser(userFromApi, userWallet);

    expect(mappedUser.avatar).toBe(userFromApi.avatar);
    expect(mappedUser.email).toBe(userFromApi.email);
    expect(mappedUser.name).toBe(userFromApi.name);
    expect(mappedUser.password).toBe(userFromApi.password);
    expect(mappedUser.wallet.aaa.amount).toBe(userWallet.aaa.amount);
  });
});
