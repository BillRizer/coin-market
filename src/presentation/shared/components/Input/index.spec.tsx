import { fireEvent, render, screen } from "@testing-library/react";
import { InputComponent } from ".";

describe("Input component", () => {
  it("renders a label and input element", () => {
    render(
      <InputComponent
        label="Email"
        id="email"
        type="email"
        value=""
        onChange={() => {}}
      />
    );
    const labelElement = screen.getByLabelText("Email");
    const inputElement = screen.getByLabelText("Email");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("updates the value when the input changes", () => {
    const handleChange = jest.fn();
    render(
      <InputComponent
        label="Email"
        id="email"
        type="email"
        value=""
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByLabelText("Email");
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
