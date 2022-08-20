import React from "react";
import AddTodo from "./AddTodo";
import ViewTodo from "./ViewTodo";

const Todo = () => {
  return (
    <>
      <div className="wrapper">
        <AddTodo />
        <ViewTodo />
      </div>
    </>
  );
};

export default Todo;
