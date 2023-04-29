import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ButtonComponent } from "./index";

describe("Button component", () => {
  it("renders with the correct text", () => {
    render(<ButtonComponent onClick={() => {}}>Click me!</ButtonComponent>);
    const buttonElement = screen.getByText(/Click me!/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonComponent onClick={handleClick}>Click me!</ButtonComponent>);
    const buttonElement = screen.getByText(/Click me!/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
