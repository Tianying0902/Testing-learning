import React, { useState } from "react";

const Todo = ({ list }) => {
  const { id, task, completed } = list;
  const h1 = <h1>{task}</h1>;
  const status = completed ? <strike>{h1}</strike> : h1;
  console.log(status);

  return <div data-testid={`todo-${id}`}>{status}</div>;
};

export default Todo;
