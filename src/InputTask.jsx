import React from "react";

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
