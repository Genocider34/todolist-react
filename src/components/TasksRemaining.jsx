import React from "react";

export default function TasksRemaining({ task }) {
  return (
    <>
      <p>
        Number of task remaining: {task.length <= 0 ? "Empty" : task.length}
      </p>
    </>
  );
}
