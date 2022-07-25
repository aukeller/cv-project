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

    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.setState({
      editMode: false,
    });
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
            <input name="name" onChange={this.onInputChange}></input>
            <label htmlFor="phone">Phone: </label>
            <input name="phone" onChange={this.onInputChange}></input>
            <label htmlFor="email">Email: </label>
            <input name="email" onChange={this.onInputChange}></input>
            <button onClick={this.onSubmitForm}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div>{this.state.name}</div>
          <div>{this.state.phone}</div>
          <div>{this.state.email}</div>
        </div>
      );
    }
  }
}

export default General;
