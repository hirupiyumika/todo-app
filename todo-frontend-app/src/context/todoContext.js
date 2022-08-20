import React, { Component } from "react"
import { addTodo, allTodos, pendingTodos, doneTodos, editTodo, deleteTodo, deleteAllTodos } from "../services/todoServices";

const TodoContext = React.createContext();

class TodoProvider extends Component {
  state = {
    allTodoList: [],
    pendingTodoList: [],
    doneTodoList: []
  }

  async componentDidMount() {

    await this.getAllTodoHandler();
    await this.getPendingTodoHandler();
    await this.getDoneTodoHandler();
  };

  addTodoHandler = async (data) => {
    try {
      const response = await addTodo(data)
      return response;
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }

  editTodoHandler = async (id, task, status) => {
    try {
      const response = await editTodo(id, task, status)
      return response;
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }

  deleteTodoHandler = async (data) => {
    try {
      const todo = this.state.allTodoList.filter(
        (t) => t._id !== data
      );
      this.setState({ allTodoList: todo });

      return await deleteTodo(data)
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }

  deleteAllTodoHandler = async () => {
    try {
      this.setState({ allTodoList: [] });
      this.setState({ pendingTodoList: [] });
      this.setState({ doneTodoList: [] });
      const response = await deleteAllTodos()
      return response;
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }

  getAllTodoHandler = async () => {
    try {
      const allTodoList = await allTodos()
      this.setState({ allTodoList: allTodoList.data });
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }

  getPendingTodoHandler = async () => {
    try {
      const pendingTodoList = await pendingTodos()
      this.setState({ pendingTodoList: pendingTodoList.data });
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }

  getDoneTodoHandler = async () => {
    try {
      const doneTodoList = await doneTodos()
      this.setState({ doneTodoList: doneTodoList.data });
    } catch (ex) {
      if (ex.response)
        return ex.response
    }
  }


  render() {
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodoHandler: this.addTodoHandler,
          editTodoHandler: this.editTodoHandler,
          deleteTodoHandler: this.deleteTodoHandler,
          deleteAllTodoHandler: this.deleteAllTodoHandler
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

const TodoConsumer = TodoContext.Consumer;
export { TodoProvider, TodoConsumer, TodoContext };