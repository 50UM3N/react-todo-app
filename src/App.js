import React, { Component } from "react";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "delectus aut autem", completed: false },
      { id: 2, title: "quis ut nam facilis et officia qui", completed: true },
      { id: 3, title: "fugiat veniam minus", completed: false },
    ],
  };

  addNewToDo = (todo) => {
    todo.id = Math.random();
    todo.completed = false;
    console.log(todo);
    const newList = [...this.state.todos, todo];
    this.setState({ todos: newList });
  };

  deleteToDo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  handleChecked = (data) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === data.id) {
        todo.completed = !data.completed;
        return todo;
      } else return todo;
    });
    this.setState({ todos });
  };

  render() {
    return (
      <div className="container py-5 d-flex justify-content-center">
        <div className="card w-500">
          <div className="card-header text-center">My ToDos</div>
          <div className="card-body">
            <ToDos
              todos={this.state.todos}
              deleteToDo={this.deleteToDo}
              handleChecked={this.handleChecked}
            />
            <AddToDo addNewToDo={this.addNewToDo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
