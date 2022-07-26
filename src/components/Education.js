import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      editMode: true,
    };
  }

  render() {
    if (this.state.editMode) {
      return (
        <div>
          <form>
            <input></input>
            <input></input>
            <input></input>
          </form>
        </div>
      );
    }
  }
}

export default Education;
