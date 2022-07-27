import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";

class App extends Component {
  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <General onInputChange={this.onInputChange}></General>
        <Education onInputChange={this.onInputChange}></Education>
      </div>
    );
  }
}

export default App;
