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
    const { onInputChange } = this.props;

    if (this.state.editMode) {
      return (
        <div>
          <form>
            <label htmlFor="school-name">
              School Name:{" "}
              <input
                onChange={onInputChange.bind(this)}
                name="school-name"
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
                name="date-of-study"
                type="text"
              />
            </label>
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div>{this.state.schoolName}</div>
          <div>{this.state.study}</div>
          <div>{this.state.date}</div>
          <button>Edit</button>
        </div>
      );
    }
  }
}

export default Education;
