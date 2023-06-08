import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import QnA from "./index";

describe("QnA", () => {
  const question = "What is the meaning of life?";
  const answer = "42";

  it("renders the question text", () => {
    render(<QnA question={question} answer={answer} />);
    const questionElement = screen.getByText(question);
    expect(questionElement).toBeInTheDocument();
  });

  it("renders the answer text when the question is clicked", () => {
    render(<QnA question={question} answer={answer} />);
    const questionElement = screen.getByText(question);
    fireEvent.click(questionElement);
    const answerElement = screen.getByText(answer);
    expect(answerElement).toBeInTheDocument();
  });

  it("hides the answer text when the question is clicked again", () => {
    render(<QnA question={question} answer={answer} />);
    const questionElement = screen.getByText(question);
    fireEvent.click(questionElement);
    fireEvent.click(questionElement);
    const answerElement = screen.queryByText(answer);
    expect(answerElement).not.toBeInTheDocument();
  });
});
