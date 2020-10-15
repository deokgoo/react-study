import React, { Component } from 'react';
import './inputForm.css';

class InputForm extends Component {
  onAdd(evt) {
    const title = evt.target.value;
    this.props.onAdd(title);
  }

  render() {
    return (
      <div className="inputForm">
        <input className="inputForm__input" type="text"/>
        <button className="inputForm__button" onClick={this.onAdd}>Add</button>
      </div>
    )
  }
}

export default InputForm;