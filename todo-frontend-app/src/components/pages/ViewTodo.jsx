import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../../context/todoContext";

const ViewTodo = () => {
  const {
    deleteTodoHandler,
    deleteAllTodoHandler,
    editTodoHandler,
    allTodoList,
    pendingTodoList,
    doneTodoList,
  } = useContext(TodoContext);

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {}, [todoList]);

  const onEdit = async (id, task, status) => {
    await editTodoHandler(id, task, status);
    window.location = "/";
  };

  const onDelete = async (id) => {
    await deleteTodoHandler(id);
    window.location = "/";
  };

  const onDeleteAll = async () => {
    await deleteAllTodoHandler();
    window.location = "/";
  };

  return (
    <>
      <div className="controls">
        <div className="filters">
          <span
            className="tab"
            tabIndex="1"
            onClick={(e) => setTodoList(allTodoList)}
          >
            All
          </span>
          <span
            className="tab"
            tabIndex="2"
            onClick={(e) => setTodoList(pendingTodoList)}
          >
            Pending
          </span>
          <span
            className="tab"
            tabIndex="3"
            onClick={(e) => setTodoList(doneTodoList)}
          >
            Completed
          </span>
        </div>
        <button className="clear-btn" onClick={(e) => onDeleteAll()}>
          Clear All
        </button>
      </div>
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

export default ViewTodo;
