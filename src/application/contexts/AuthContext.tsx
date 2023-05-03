import { createContext, useEffect, useState } from "react";
import { IUser, IUserBasic } from "../types/user";

interface AuthContextData {
  user: IUser | null;
  getUser(): IUser | null;
  updateUser(user: IUser): IUser;
  signIn(user: IUserBasic): Promise<IUser>;
  signUp(user: IUser): Promise<IUser>;
  signOut(): void;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    setUser(getUser());
    console.log("auth useEffect");
  }, []);

  const getUser = () => {
    const userStorage = localStorage.getItem("user");
    if (!userStorage) return null;
    return JSON.parse(userStorage);
  };
  const updateUser = (user: IUser) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  };

  const signIn = async (user: IUser) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("funcao sigin");
    return user;
  };
  const signUp = async (user: IUser) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("funcao signUp");
    return user;
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("funcao signOut");
  };

  return (
    <AuthContext.Provider
      value={{ user, updateUser, signIn, signOut, signUp, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
