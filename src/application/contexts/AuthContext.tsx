import { createContext, useEffect, useState } from "react";
import { IUser, IUserBasic } from "../types/user";
import { getUserFromService } from "../services/user";
import * as localStorageInfra from "../../infrastructure/local-storage";

interface AuthContextData {
  user: IUser | null;
  getUserFromLocalStorage(): IUser | null;
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
    getUserFromService().then((user) => {
      if (user) {
        updateUser(user);
      }
    });
  }, []);

  const getUserFromLocalStorage = () => {
    return localStorageInfra.get("user");
  };
  const updateUser = (user: IUser) => {
    localStorageInfra.set("user", user);
    setUser(user);
    return user;
  };

  const signIn = async (user: IUser) => {
    return getDefaultUser();
  };

  const signUp = async (user: IUser) => {
    //implemente new user here
    return getDefaultUser();
  };
  const getDefaultUser = async () => {
    const defaultUser = await getUserFromService();
    if (!defaultUser) {
      throw new Error("Can't get dafault user from API");
    }
    setUser(defaultUser);
    localStorageInfra.set("user", defaultUser);
    return defaultUser;
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("funcao signOut");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        signIn,
        signOut,
        signUp,
        getUserFromLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
