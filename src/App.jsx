import React from "react";
import InputTask from "./components/InputTask";
import TasksList from "./components/TasksList";
import TasksRemaining from "./components/TasksRemaining";
import Header from "./components/Header";
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
        <Header />
        <TasksRemaining task={task} />
        <InputTask handleAddTask={handleAddTask} />
      </header>

      <TasksList handleDeleteTask={handleDeleteTask} task={task} />
    </>
  );
}
