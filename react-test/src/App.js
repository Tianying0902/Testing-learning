import "./App.css";
import Todo from "./components/Todo";
function App() {
  const tasks = [
    { id: 1, task: "Task 001", completed: false },
    { id: 2, task: "Task 002", completed: true },
    { id: 3, task: "Task 003", completed: false },
  ];
  return (
    <div className="App">
      {tasks.map((task) => {
        return <Todo key={task.id} list={task} />;
      })}
    </div>
  );
}

export default App;
