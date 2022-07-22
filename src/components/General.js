import React, { Component } from "react";

class General extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name: </label>
          <input name="name"></input>
          <label htmlFor="phone">Phone: </label>
          <input name="phone"></input>
          <label htmlFor="email">Email: </label>
          <input name="email"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
