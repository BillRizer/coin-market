import { convertPxToRem } from "./parse";

describe("convertPxToRem", () => {
  it("should return the correct rem value when the base font size is 10px", () => {
    const pxValue = 20;
    const baseFontSize = 10;
    const remValue = pxValue / baseFontSize;
    expect(convertPxToRem(pxValue, baseFontSize)).toBe(`${remValue}rem`);
  });

  it("should return the correct rem value when the base font size is not 10px", () => {
    const pxValue = 30;
    const baseFontSize = 16;
    const remValue = pxValue / baseFontSize;
    expect(convertPxToRem(pxValue, baseFontSize)).toBe(`${remValue}rem`);
  });
});
