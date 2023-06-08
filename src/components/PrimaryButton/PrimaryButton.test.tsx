import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrimaryButton from ".";

describe("PrimaryButton", () => {
  it("renders the button with the correct text", () => {
    const buttonTitle = "Click me!";
    render(<PrimaryButton buttonTitle={buttonTitle} onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonTitle);
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<PrimaryButton buttonTitle="Click me!" onClick={onClickMock} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies the classNameButton prop to the button element", () => {
    const classNameButton = "test-class";
    render(
      <PrimaryButton
        buttonTitle="Click me!"
        onClick={() => {}}
        classNameButton={classNameButton}
      />
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(classNameButton);
  });

  it("applies the classNameTitle prop to the text element", () => {
    const classNameTitle = "test-class";
    render(
      <PrimaryButton
        buttonTitle="Click me!"
        onClick={() => {}}
        classNameTitle={classNameTitle}
      />
    );
    const textElement = screen.getByText("Click me!");
    expect(textElement).toHaveClass(classNameTitle);
  });
});