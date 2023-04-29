import "styled-components";
import { theme } from "./theme-base";

declare module "styled-components" {
  type Theme = typeof theme;

  export interface DefaultTheme extends Theme {
    name: string;
  }
}
