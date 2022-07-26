import React, { Component } from "react";
import GeneralForm from "./GeneralForm";

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
    this.state.editMode === true
      ? this.setState({ editMode: false })
      : this.setState({ editMode: true });
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.editMode) {
      return (
        <GeneralForm
          onInputChange={this.onInputChange}
          toggleEditMode={this.toggleEditMode}
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
        />
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
