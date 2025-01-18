import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };
  const toggleList = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="Todo">
      {/* title */}
      <div className="Todo-in">
        <h2>
          <i className="bi bi-calendar-check-fill"></i> To-Do List
        </h2>
      </div>
      {/* title */}

      {/* input box*/}
      <div className="Todo-button">
        <input ref={inputRef} type="text" placeholder="Add your task"></input>
        <button onClick={add} type="button" class="btn Todo-but">
          ADD +
        </button>
      </div>
      {/* input box*/}

      {/* todo list */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggleList={toggleList}
            />
          );
        })}
      </div>
      {/* todo list */}
    </div>
  );
};
export default Todo;
