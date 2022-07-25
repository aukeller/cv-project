import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      editMode: true,
      name: "",
      phone: "",
      email: "",
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  toggleEditMode(e) {
    e.preventDefault();
    if (this.state.editMode === true) {
      this.setState({
        editMode: false,
      });
    } else {
      this.setState({ editMode: true });
    }
  }

  onInputChange(e) {
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name === "phone") {
      this.setState({ phone: e.target.value });
    } else {
      this.setState({ email: e.target.value });
    }
  }

  render() {
    if (this.state.editMode) {
      return (
        <div>
          <form>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              onChange={this.onInputChange}
              value={this.state.name}
            ></input>
            <label htmlFor="phone">Phone: </label>
            <input
              name="phone"
              onChange={this.onInputChange}
              value={this.state.phone}
            ></input>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              onChange={this.onInputChange}
              value={this.state.email}
            ></input>
            <button onClick={this.toggleEditMode}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div>{this.state.name}</div>
          <div>{this.state.phone}</div>
          <div>{this.state.email}</div>
          <button onClick={this.toggleEditMode}>Edit</button>
        </div>
      );
    }
  }
}

export default General;
