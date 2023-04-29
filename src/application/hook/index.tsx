import React from "react";
import { ModalProvider } from "./modal";
import { CustomThemeProvider } from "./theme";

interface Props {
  children: any;
}
const AppProvider = ({ children }: Props) => (
  <CustomThemeProvider>
    <ModalProvider>{children}</ModalProvider>
  </CustomThemeProvider>
);

export default AppProvider;
