import React from "react";

import { RoutesComponent } from "./application/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/styles/theme-base";
import * as Hook from "./application/hook/theme";

function App() {
  return (
    <>
      <Hook.Theme>
        <RoutesComponent></RoutesComponent>
      </Hook.Theme>
    </>
  );
}

export default App;
