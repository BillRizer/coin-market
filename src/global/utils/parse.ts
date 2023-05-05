export function convertPxToRem(pxValue: number, baseFontSize = 10) {
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
}
