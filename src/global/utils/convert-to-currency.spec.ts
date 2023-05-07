import { convertToCurrencyFormat } from "./convert-to-currency";

describe("convertToCurrencyFormat", () => {
  it("should convert float to dollar format", () => {
    expect(convertToCurrencyFormat(10.5, "USD")).toBe("US$ 10.50");
    expect(convertToCurrencyFormat(1000.5, "USD")).toBe("US$ 1,000.50");
  });

  it("should convert float to euro format", () => {
    expect(convertToCurrencyFormat(20.12, "EUR")).toBe("€ 20.12");
    expect(convertToCurrencyFormat(1500.75, "EUR")).toBe("€ 1,500.75");
  });

  it("should convert float to yen format", () => {
    expect(convertToCurrencyFormat(1000, "JPY")).toBe("¥ 1,000");
    expect(convertToCurrencyFormat(2000.25, "JPY")).toBe("¥ 2,000");
  });

  it("should convert float to real format", () => {
    expect(convertToCurrencyFormat(1000, "BRL",'pt-BR')).toBe("R$ 1.000,00");
    expect(convertToCurrencyFormat(2000.25, "BRL",'pt-BR')).toBe("R$ 2.000,25");
  });

});
