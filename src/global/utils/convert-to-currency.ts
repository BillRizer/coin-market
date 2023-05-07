export type CurrencyCode = "USD" | "EUR" | "JPY" | "BRL";
export type LocaleCode = "en-US" | "pt-BR";

export function convertToCurrencyFormat(
  value: number,
  currency: CurrencyCode,
  locale?: LocaleCode
): string {
  const formatter = new Intl.NumberFormat(locale ? locale : "en-US", {
    style: "currency",
    currency: currency,
  });
  const prefix = currency == "USD" ? "US" : "";
  const formated = formatter
    .format(value)
    .replace(/^([\d,.]+)/, "$1 ")
    .replace(/([\d,.]+)$/, " $1");

  return `${prefix}${formated}`;
}
