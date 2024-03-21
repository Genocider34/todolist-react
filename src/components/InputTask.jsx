import React from "react";
import "./InputTask.css";

export default function ({ handleAddTask }) {
  const [addTask, setAddTask] = React.useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddTask(addTask);

          setAddTask("");
        }}
      >
        <input
          placeholder="Enter a Task"
          maxLength="20"
          type="text"
          value={addTask}
          onChange={(event) => {
            setAddTask(event.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}
