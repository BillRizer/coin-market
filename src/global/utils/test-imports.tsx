import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import { CustomThemeProvider } from "../../application/hook/theme";

export { React, render, screen,fireEvent };

export const MountEnv =(children:any):JSX.Element=>{
    return <CustomThemeProvider>{children}</CustomThemeProvider>
}