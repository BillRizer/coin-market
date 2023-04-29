import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CheckboxComponent } from "./index";

describe("Checkbox component", () => {
  test("renders label text", () => {
    render(<CheckboxComponent>text here</CheckboxComponent>);

    const labelText = screen.getByText(/text here/i);

    expect(labelText).toBeInTheDocument();
  });

  test("renders checked state", () => {
    render(<CheckboxComponent checked={true}>text here</CheckboxComponent>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(<CheckboxComponent checked={false} onChange={handleChange} >text here</CheckboxComponent>);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });


});
