import React from "react";

import { RoutesComponent } from "./application/router";
import AppProvider from "./application/hook/index";
import GlobalStyle from "./global/styles/global-style";
import { setConfiguration } from "react-grid-system";
setConfiguration({
  containerWidths: [272, 672, 1216],
  breakpoints: [302, 702, 1246],
  gutterWidth: 32,
  gridColumns: 12,
  defaultScreenClass: "lg",
  maxScreenClass: "lg",
});

function App() {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <RoutesComponent></RoutesComponent>
      </AppProvider>
    </>
  );
}

export default App;
