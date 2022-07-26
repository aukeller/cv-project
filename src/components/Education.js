import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      editMode: true,
      schoolName: "",
      study: "",
      date: "",
    };
  }

  render() {
    if (this.state.editMode) {
      return (
        <div>
          <form>
            <label htmlFor="school-name">
              School Name: <input name="school-name" type="text" />
            </label>
            <label htmlFor="study">
              Study: <input name="study" type="text" />
            </label>
            <label htmlFor="date-of-study">
              Date of Study: <input name="date-of-study" type="text" />
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
