import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.state = {
      editMode: true,
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.setState({
      editMode: false,
    });
  }

  render() {
    if (this.state.editMode) {
      return (
        <div>
          <form>
            <label htmlFor="name">Name: </label>
            <input name="name"></input>
            <label htmlFor="phone">Phone: </label>
            <input name="phone"></input>
            <label htmlFor="email">Email: </label>
            <input name="email"></input>
            <button onClick={this.onSubmitForm}>Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default General;
