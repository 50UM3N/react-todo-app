import React, { Component } from "react";

class AddToDo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewToDo(this.state);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="New todo"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <button className="btn btn-outline-primary">Add</button>
        </div>
      </form>
    );
  }
}
export default AddToDo;
