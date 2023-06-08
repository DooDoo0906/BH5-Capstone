import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SecondaryButton from "./index";

describe("SecondaryButton", () => {
  it("renders the button with the correct text", () => {
    const btnText = "Click me!";
    render(<SecondaryButton btnText={btnText} onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(btnText);
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<SecondaryButton btnText="Click me!" onClick={onClickMock} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies the classNameButton prop to the button element", () => {
    const classNameButton = "test-class";
    render(
      <SecondaryButton
        btnText="Click me!"
        onClick={() => {}}
        classNameButton={classNameButton}
      />
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(classNameButton);
  });

  it("applies the className prop to the text element", () => {
    const className = "test-class";
    render(
      <SecondaryButton
        btnText="Click me!"
        onClick={() => {}}
        className={className}
      />
    );
    const textElement = screen.getByText("Click me!");
    expect(textElement).toHaveClass(className);
  });
});
