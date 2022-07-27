import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";

class App extends Component {
  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleEditMode(e) {
    e.preventDefault();
    if (this.state.editMode === true) {
      this.setState({ editMode: false });
    } else {
      this.setState({ editMode: true });
    }
  }

  render() {
    return (
      <div>
        <General
          onInputChange={this.onInputChange}
          toggleEdit={this.toggleEditMode}
        ></General>
        <Education
          onInputChange={this.onInputChange}
          toggleEdit={this.toggleEditMode}
        ></Education>
      </div>
    );
  }
}

export default App;
