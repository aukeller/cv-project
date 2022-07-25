import React, { Component } from "react";

class GeneralForm extends Component {
  render() {
    const { name, phone, email, onInputChange, toggleEditMode } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">Name: </label>
          <input name="name" onChange={onInputChange} value={name}></input>
          <label htmlFor="phone">Phone: </label>
          <input name="phone" onChange={onInputChange} value={phone}></input>
          <label htmlFor="email">Email: </label>
          <input name="email" onChange={onInputChange} value={email}></input>
          <button onClick={toggleEditMode}>Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralForm;
