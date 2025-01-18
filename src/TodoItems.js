import React from "react";
import "./TodoItems.css";
import tick from "./tick.png";
import not_tick from "./not_tick.png";
import deleteIcon from "./deleteIcon.jpg";

const TodoItems = ({ text, id, isComplete, toggleList, deleteTodo }) => {
  return (
    <div className="TodoItems">
      <div
        onClick={() => {
          toggleList(id);
        }}
        className="TodoItemsIcon"
      >
        <img src={isComplete ? tick : not_tick} alt="icon" />

        <p
          className={`
            ${isComplete ? "text-decoration-line-through" : ""}`}
        >
          {text}
        </p>
      </div>
      <div className="TodoItemsDel">
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          src={deleteIcon}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default TodoItems;
