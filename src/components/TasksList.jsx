import React from "react";

export default function TasksList({ handleDeleteTask }) {
  return (
    <div>
      <ul>
        {task.map(({ task, id }) => (
          <li onClick={() => handleDeleteTask(id)} key={id}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
