import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ButtonComponent } from "./index";
import { MountEnv } from "../../../../global/utils/test-imports";

describe("Button component", () => {
  it("renders with the correct text", () => {
    render(MountEnv(<ButtonComponent onClick={() => {}}>Click me!</ButtonComponent>));
    const buttonElement = screen.getByText(/Click me!/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(MountEnv(<ButtonComponent onClick={handleClick}>Click me!</ButtonComponent>));
    const buttonElement = screen.getByText(/Click me!/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
