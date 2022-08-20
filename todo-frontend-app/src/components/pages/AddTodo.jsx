import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/todoContext";

const AddTodo = () => {
  const { addTodoHandler } = useContext(TodoContext);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await addTodoHandler(task);
      window.location = "/";
    } else setError("please enter a task first");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a New Task"
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="clear-btn">Add</button>
      </div>
      {error && (
        <center>
          <p style={{ color: "red" }}>please enter a task first</p>
        </center>
      )}
    </form>
  );
};

export default AddTodo;
