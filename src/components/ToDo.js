import React from "react";
import "../components/ToDo.css";
export default function ToDo({ todo, handleToggle }) {
  /* show task name and toggle classname for change in color using onclick method pass id and execute givin functionality  */
  const handleClick = (e) => {
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      onClick={handleClick}
      className={todo.complete ? " todo strike" : "todo"}
    >
      {todo.task}

      <i
        className={
          todo.complete
            ? " fa-solid fa-circle customcircle"
            : "fa-solid fa-circle gray"
        }
      ></i>
    </div>
  );
}
