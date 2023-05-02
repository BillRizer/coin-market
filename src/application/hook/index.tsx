import React from "react";
import { ModalProvider } from "./modal";
import { CustomThemeProvider } from "./theme";
import { useAuth } from "./useAuth";
import { AuthProvider } from "../contexts/auth";

interface Props {
  children: any;
}
const AppProvider = ({ children }: Props) => (
  <AuthProvider>
    <CustomThemeProvider>
      <ModalProvider>{children}</ModalProvider>
    </CustomThemeProvider>
  </AuthProvider>
);

export default AppProvider;
