import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CheckboxComponent } from "./index";
import { MountEnv } from "../../../../global/utils/test-imports";

describe("Checkbox component", () => {
  test("renders label text", () => {
    render(MountEnv(<CheckboxComponent>text here</CheckboxComponent>));

    const labelText = screen.getByText(/text here/i);

    expect(labelText).toBeInTheDocument();
  });



  test("handles onChange event", () => {
    const handleChange = jest.fn();
    render(
      MountEnv(
        <CheckboxComponent checked={false} onChange={handleChange}>
          text here
        </CheckboxComponent>
      )
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
