import React from "react";
import InputTask from "./InputTask";

export default function App() {
  const [addTask, setAddTask] = React.useState([]);

  function handleAddTask(task) {
    const newTask = {
      task,
      id: crypto.randomUUID(),
    };

    const nextTask = [...addTask, newTask];
    setAddTask(nextTask);
  }

  function handleDeleteTask() {
    const nextTask = [...addTask];
    nextTask.pop();
    setAddTask(nextTask);
  }

  return (
    <>
      <header>
        <h1>to do list</h1>
        <InputTask handleAddTask={handleAddTask} />
        <button onClick={handleDeleteTask}>Delete</button>
      </header>

      <div>
        <ul>
          {addTask.map(({ task, id }) => (
            <li key={id}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
