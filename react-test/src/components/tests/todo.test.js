import { screen, render, cleanup } from "@testing-library/react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("should render non-completed todo component", () => {
  const tasks = { id: 1, task: "Task 001", completed: false };
  render(<Todo list={tasks} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Task 001");
  expect(todoElement).not.toContainHTML("strike");
});

test("should render completed todo component", () => {
  const tasks = { id: 2, task: "Task 002", completed: true };
  render(<Todo list={tasks} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Task 002");
  expect(todoElement).toContainHTML("strike");
});

test("match the snapshot", () => {
  const task = { id: 3, task: "Task 003", completed: false };
  const tree = renderer.create(<Todo list={task} />).toJSON();
  //   console.log(tree);
  expect(tree).toMatchSnapshot();
});
