import React from "react";

import { RoutesComponent } from "./application/router";
import AppProvider from "./application/hook/index";
import GlobalStyle from "./global/styles/global-style";
import { UpdateGridConfig } from "./config/UpdateGridConfig";


function App() {
  return (
      <AppProvider>
        <UpdateGridConfig/>
        <GlobalStyle />
        <RoutesComponent/>
      </AppProvider>
  );
}

export default App;
