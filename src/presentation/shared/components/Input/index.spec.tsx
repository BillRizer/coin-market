import { fireEvent, render, screen } from "@testing-library/react";
import { InputComponent } from ".";
import { MockTheme } from "../../../../global/utils/test-wrap-theme";

describe("Input component", () => {
  it("renders a label and input element", () => {
    render(
      <MockTheme>
        <InputComponent
          label="Email"
          id="email"
          type="email"
          value=""
          onChange={() => {}}
        />
      </MockTheme>
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("updates the value when the input changes", () => {
    const handleChange = jest.fn();
    render(
      <MockTheme>
        <InputComponent
          label="Email"
          id="email"
          type="email"
          value=""
          onChange={handleChange}
        />
      </MockTheme>
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
