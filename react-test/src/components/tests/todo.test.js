import { screen, render, cleanup } from "@testing-library/react";
import Todo from "../Todo";

test("should render todo", () => {
  render(<Todo />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("todos");
});
