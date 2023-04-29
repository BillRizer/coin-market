import React from "react";

import { RoutesComponent } from "./application/router";
import AppProvider from "./application/hook/index";

function App() {
  return (
    <>
      <AppProvider>
        <RoutesComponent></RoutesComponent>
      </AppProvider>
    </>
  );
}

export default App;
