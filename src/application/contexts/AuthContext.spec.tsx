import React from "react";
import { render, act } from "@testing-library/react";
import { AuthContext } from "./AuthContext";
import { IUser } from "../types/user";

const mockUser: IUser = {
  name: "John",
  avatar: "http://aaa",
  email: "john@example.com",
  password: "password",
  wallet: { abc: { amount: 10 } },
};
describe("AuthContext", () => {
  it("should initialize auth state with undefined user", () => {
    let currentUser;
    const TestComponent = () => {
      const { user } = React.useContext(AuthContext);
      currentUser = user;
      return null;
    };

    render(<TestComponent />);

    expect(currentUser).toBeUndefined();
  });
});
