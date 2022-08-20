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

  const [todoList, setTodoList] = useState("");

  useEffect(() => {}, [todoList]);

  const onEdit = async (id, task, status) => {
    await editTodoHandler(id, task, status);
    window.location = "/";
  };

  const onDelete = async (id) => {
    await deleteTodoHandler(id);
  };

  const onDeleteAll = async () => {
    await deleteAllTodoHandler();
  };

  return (
    <>
      <div className="controls">
        <div className="filters">
          <span className="tab" tabIndex="1" onClick={(e) => setTodoList("")}>
            Task
          </span>
          <span
            className="tab"
            tabIndex="2"
            onClick={(e) => setTodoList("pending")}
          >
            Pending
          </span>
          <span
            className="tab"
            tabIndex="3"
            onClick={(e) => setTodoList("done")}
          >
            Completed
          </span>
        </div>
        <button className="clear-btn" onClick={(e) => onDeleteAll()}>
          Clear All
        </button>
      </div>
      <ul className="task-box">
        {!todoList &&
          allTodoList.map((t, index) => (
            <li className="task" key={index}>
              <label>
                {t.status === "pending" ? (
                  <p>{t.task}</p>
                ) : (
                  <p className="checked">{t.task}</p>
                )}
              </label>
              <div style={{ float: "right", position: "relative" }}>
                {t.status === "pending" ? (
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

        {todoList === "pending" &&
          pendingTodoList.map((t, index) => (
            <li className="task" key={index}>
              <label>
                <p>{t.task}</p>
              </label>
            </li>
          ))}

        {todoList === "done" &&
          doneTodoList.map((t, index) => (
            <li className="task" key={index}>
              <label>
                <p className="checked">{t.task}</p>
              </label>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ViewTodo;
