import React from "react";
import InputTask from "./components/InputTask";
import TasksList from "./components/TasksList";
import "./App.css";

export default function App() {
  const [task, setTask] = React.useState([]);

  function handleAddTask(label) {
    const newTask = {
      task: label,
      id: crypto.randomUUID(),
    };

    const isSpace = newTask.task.trim();
    const isEmpty = newTask.task !== "";
    const isDuplicate = !task.some(
      (item) => item.task.toLowerCase() === newTask.task.toLowerCase()
    );

    if (!isDuplicate) {
      alert(`${newTask.task} is already on the list`);
    }

    if (isEmpty && isSpace && isDuplicate) {
      const nextTask = [...task, newTask];
      setTask(nextTask);
    }
  }

  function handleDeleteTask(id) {
    setTask(task.filter((item) => item.id !== id));
  }

  return (
    <>
      <header>
        <h1>
          to<span>/</span>do<span>/</span>list
        </h1>
        <p>
          Number of task remaining: {task.length <= 0 ? "Empty" : task.length}
        </p>
        <InputTask handleAddTask={handleAddTask} />
      </header>

      {/* <TasksList handleDeleteTask={handleDeleteTask} task={task} /> */}
      <div>
        <ul>
          {task.map(({ task, id }) => (
            <li onClick={() => handleDeleteTask(id)} key={id}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
