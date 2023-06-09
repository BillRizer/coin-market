import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme-base";

export function MockTheme({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
