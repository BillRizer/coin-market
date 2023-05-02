import { createContext, useEffect, useState } from "react";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  getUser(): object | null;
  signIn(user: object): Promise<void>;
  signUp(user: object): Promise<void>;
  signOut(): void;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);
  useEffect(() => {
    setUser(getUser());
    console.log("auth useEffect");
  }, []);
  const getUser = () => {
    const userStorage = localStorage.getItem("user");
    if (!userStorage) return null;
    return JSON.parse(userStorage);
  };
  const signIn = async (user: object) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("funcao sigin");
    return;
  };
  const signUp = async (user: object) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("funcao signUp");
    return;
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("funcao signOut");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signIn, signOut, signUp, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
