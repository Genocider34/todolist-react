import React from "react";
import "./InputTask.css";

export default function ({ handleAddTask }) {
  const [task, setTask] = React.useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddTask(task);

          setTask("");
        }}
      >
        <input
          placeholder="Enter a Task"
          maxLength="20"
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}
