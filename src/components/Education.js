import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      schoolName: "",
      study: "",
      date: "",
    };
  }

  render() {
    const { onInputChange, toggleEdit } = this.props;

    if (this.state.editMode) {
      return (
        <div>
          <form>
            <label htmlFor="school-name">
              School Name:{" "}
              <input
                onChange={onInputChange.bind(this)}
                name="schoolName"
                type="text"
              />
            </label>
            <label htmlFor="study">
              Study:{" "}
              <input
                onChange={onInputChange.bind(this)}
                name="study"
                type="text"
              />
            </label>
            <label htmlFor="date">
              Date of Study:{" "}
              <input
                onChange={onInputChange.bind(this)}
                name="date"
                type="text"
              />
            </label>
            <button onClick={toggleEdit.bind(this)}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div>{this.state.schoolName}</div>
          <div>{this.state.study}</div>
          <div>{this.state.date}</div>
          <button onClick={toggleEdit.bind(this)}>Edit</button>
        </div>
      );
    }
  }
}

export default Education;
