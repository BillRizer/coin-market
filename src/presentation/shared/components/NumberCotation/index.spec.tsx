import React from "react";
import { render, screen } from "@testing-library/react";
import { NumberCotationComponent } from "./index";

describe("NumberDisplay component", () => {
  test("should render positive number in green", () => {
    render(<NumberCotationComponent num={5} />);

    const numberElement = screen.getByText("5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle("color: green");
  });
  test("should render positive number with signal positive", () => {
    render(<NumberCotationComponent showSignal num={5} />);

    const numberElement = screen.getByText("+5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle("color: green");
  });

  test("should render negative number with signal negative", () => {
    render(<NumberCotationComponent showSignal num={-5} />);

    const numberElement = screen.getByText("-5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle("color: red");
  });

  test("should render negative number in red", () => {
    render(<NumberCotationComponent num={-5} />);

    const numberElement = screen.getByText("-5");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle("color: red");
  });
  test("should render negative number with suffix", () => {
    render(<NumberCotationComponent num={-5} showSignal sufix="%" />);

    const numberElement = screen.getByText("-5%");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle("color: red");
  });
  test("should render positive number with suffix", () => {
    render(<NumberCotationComponent num={5} showSignal sufix="%" />);

    const numberElement = screen.getByText("+5%");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveStyle("color: green");
  });
});
