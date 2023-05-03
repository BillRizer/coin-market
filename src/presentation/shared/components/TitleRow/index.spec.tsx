import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { TitleRowComponent } from "./index";
import Icon from '../../../../assets/icons/brand.svg'
describe("TitleRowComponent", () => {
  it("should render component with only title", () => {
    render(
      <TitleRowComponent title="My Title" />
    );

    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(screen.queryByTestId("children")).not.toBeInTheDocument();
  });

  it("should render component with icon and title", () => {
    render(
      <TitleRowComponent icon={Icon} title="My Title" />
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.queryByTestId("children")).not.toBeInTheDocument();
  });

  it("should render component with children", () => {
    render(
      <TitleRowComponent title="My Title">
        <span data-testid="my-children">My Baby</span>
      </TitleRowComponent>
    );

    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(screen.getByTestId("my-children")).toBeInTheDocument();
  });

  it("should render component with icon, title and children", () => {
    render(
      <TitleRowComponent icon={Icon} title="My Title">
        <span data-testid="my-children">My Baby</span>
      </TitleRowComponent>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByTestId("my-children")).toBeInTheDocument();
  });
});