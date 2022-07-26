import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
      <div>
        <General></General>
        <Education></Education>
      </div>
    );
  }
}

export default App;
