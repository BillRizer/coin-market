export type CurrencyCode = "USD" | "EUR" | "JPY" | "BRL";

export function convertToCurrencyFormat(
  value: number,
  currency: CurrencyCode
): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(value);
}
