import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../context/todoContext";

const TodoList = () => {
  const {
    deleteTodoHandler,
    deleteAllTodoHandler,
    editTodoHandler,
    allTodoList,
    pendingTodoList,
    doneTodoList,
  } = useContext(TodoContext);

  const [todoList, setTodoList] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [pendingTodos, setPendingTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  useEffect(() => {}, [todoList]);

  const onEdit = async (id, task, status) => {
    await editTodoHandler(id, task, status);
    window.location = "/";
  };

  const onDelete = async (id) => {
    await deleteTodoHandler(id);
    const todo = allTodoList.filter((t) => t._id !== id);
    setTodoList(todo);
  };

  const allTodoListHandler = async () => {
    setAllTodos(allTodoList);
    setPendingTodos("");
    setDoneTodos("");
  };

  const pendingTodoListHandler = async () => {
    setAllTodos("");
    setPendingTodos(pendingTodoList);
    setDoneTodos("");
  };

  const doneTodoListHandler = async () => {
    setAllTodos("");
    setPendingTodos("");
    setDoneTodos(doneTodoList);
  };

  return (
    <>
      <ul className="task-box">
        {todoList.map((t, index) => (
          <li className="task" key={index}>
            <label>
              {t.status == "pending" ? (
                <p>{t.task}</p>
              ) : (
                <p className="checked">{t.task}</p>
              )}
            </label>
            <div style={{ float: "right", position: "relative" }}>
              {t.status == "pending" ? (
                <i
                  className="material-icons"
                  style={{ color: "gray", cursor: "pointer" }}
                  onClick={(e) => onEdit(t._id, t.task, "done")}
                >
                  task_alt
                </i>
              ) : (
                <i
                  className="material-icons"
                  style={{ color: "green", cursor: "pointer" }}
                  onClick={(e) => onEdit(t._id, t.task, "pending")}
                >
                  task_alt
                </i>
              )}

              <i
                className="material-icons"
                style={{ color: "red", cursor: "pointer" }}
                onClick={(e) => onDelete(t._id)}
              >
                delete
              </i>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
