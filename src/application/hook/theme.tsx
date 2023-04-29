import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global/styles/theme-base";


export const Theme = ({ children }:any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
