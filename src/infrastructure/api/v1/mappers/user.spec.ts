import { IUser } from "../dtos/user.dto";
import { MapperFromApiUser } from "./user";

describe("MapperFromApiUser", () => {
  it("should map user from API format to internal format correctly", () => {
    const userFromApi: IUser = {
      id: 1,
      avatar: "https://example.com/avatar.jpg",
      email: "test@example.com",
      name: "John Doe",
      password: "password123",
    };

    const mappedUser = MapperFromApiUser(userFromApi);

    expect(mappedUser.avatar).toBe(userFromApi.avatar);
    expect(mappedUser.email).toBe(userFromApi.email);
    expect(mappedUser.name).toBe(userFromApi.name);
    expect(mappedUser.password).toBe(userFromApi.password);
  });
});
