import React, { useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

import "./TasksList.css";

export default function TasksList({ handleDeleteTask, task }) {
  const [isCheck, setIsCheck] = useState(true);

  function handleCheck() {
    setIsCheck((checking) => !checking);
  }

  return (
    <div>
      <ul>
        {task.map(({ task, id }) => (
          <li key={id}>
            <div className="border"></div>
            <article>
              <div onClick={handleCheck} className="wrapper">
                {isCheck ? (
                  <MdCheckBoxOutlineBlank className="check-icon " />
                ) : (
                  <IoIosCheckbox className="check-icon " />
                )}
                <span className={!isCheck ? "active" : null}>{task}</span>
              </div>
              <div className="wrapper">
                <FaTrash className="trash-icon" />
                <MdEdit className="edit-icon" />
              </div>
            </article>
            <div className="border"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
