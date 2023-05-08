import { convertPxToRem } from "../utils/parse";

export const theme = {
  name: "theme",
  colors: {
    primary: {
      w100: "#FFF6E8",
      base: "#FBAB34",
      w400: "#FFB94F",
    },
    secondary: {
      w100: "#F6F6F6",
      w200: "#F4F3F8",
      w300: "#E0DEEA",
      w400: "#ACABB7",
      base: "#8C8A97",
      w800: "#4E4B59",
      w900: "#33303E",
    },
    tertiary: {
      w400: "#8DE8B8",
      base: "#1BD171",
      w600: "#18B863",
      w700: "#149E55",
    },
    quartenary: {
      base: "#EC3237",
      w700: "#A12226",
    },
    white: "#fff",
    black: "#000",
    textBase: "#5D6670",
  },
  fonts: {
    h1: {
      size: convertPxToRem(48),
      LineHeight: convertPxToRem(56),
      LetterSpacing: "-1",
    },
    h2: {
      size: convertPxToRem(40),
      LineHeight: convertPxToRem(48),
      LetterSpacing: "-1",
    },
    h3: {
      size: convertPxToRem(32),
      LineHeight: convertPxToRem(40),
      LetterSpacing: "0",
    },
    h4: {
      size: convertPxToRem(24),
      LineHeight: convertPxToRem(32),
      LetterSpacing: "0",
    },
    h5: {
      size: convertPxToRem(20),
      LineHeight: convertPxToRem(24),
      LetterSpacing: "0",
    },
    p: {
      size: convertPxToRem(16),
      LineHeight: convertPxToRem(24),
      LetterSpacing: "0",
    },
    label: {
      size: convertPxToRem(14),
      LineHeight: convertPxToRem(16),
      LetterSpacing: "0",
    },
    smallLabel: {
      size: convertPxToRem(12),
      LineHeight: convertPxToRem(14),
      LetterSpacing: "0",
    },
  },
};
