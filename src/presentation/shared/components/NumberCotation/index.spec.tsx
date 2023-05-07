import React from "react";
import { render, screen } from "@testing-library/react";
import { NumberCotationComponent } from "./index";
import { theme } from "../../../../global/styles/theme-base";

const greenColor = theme.colors.tertiary.w700;
const redColor = theme.colors.quartenary.w700;
describe("NumberDisplay component", () => {
  test("should render positive number in green", () => {
    render(<NumberCotationComponent num={5} />);

    const numberElement = screen.getByText("5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle(`color: ${greenColor}`);
  });
  test("should render positive number with signal positive", () => {
    render(<NumberCotationComponent showSignal num={5} />);

    const numberElement = screen.getByText("+5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle(`color: ${greenColor}`);
  });

  test("should render negative number with signal negative", () => {
    render(<NumberCotationComponent showSignal num={-5} />);

    const numberElement = screen.getByText("-5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle(`color: ${redColor}`);
  });

  test("should render negative number in red", () => {
    render(<NumberCotationComponent num={-5} />);

    const numberElement = screen.getByText("-5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle(`color: ${redColor}`);
  });
  test("should render negative number with suffix", () => {
    render(<NumberCotationComponent num={-5} showSignal sufix="%" />);

    const numberElement = screen.getByText("-5%");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle(`color: ${redColor}`);
  });
  test("should render positive number with suffix", () => {
    render(<NumberCotationComponent num={5} showSignal sufix="%" />);

    const numberElement = screen.getByText("+5%");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle(`color: ${greenColor}`);
  });
});
