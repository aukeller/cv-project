import React, { Component } from "react";
import GeneralForm from "./GeneralForm";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      name: "",
      phone: "",
      email: "",
    };
  }

  render() {
    if (this.state.editMode) {
      return (
        <GeneralForm
          onInputChange={this.props.onInputChange.bind(this)}
          toggleEditMode={this.props.toggleEdit.bind(this)}
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
          <button onClick={this.props.toggleEdit.bind(this)}>Edit</button>
        </div>
      );
    }
  }
}

export default General;
