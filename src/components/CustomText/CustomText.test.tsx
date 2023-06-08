import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomText from "./index";

describe("CustomText", () => {
  it("applies the className prop to the main element", () => {
    const className = "test-class";
    render(
      <CustomText textType="body" text="Hello, world!" className={className} />
    );
    const mainElement = screen.getByText("Hello, world!");
    expect(mainElement).toHaveClass(className);
  });

  it("applies the styles prop to the main element", () => {
    const styles = { color: "red" };
    render(<CustomText textType="body" text="Hello, world!" styles={styles} />);
    const mainElement = screen.getByText("Hello, world!");
    expect(mainElement).toHaveStyle(styles);
  });
});
