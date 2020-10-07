import React, { Component } from 'react';

class InputForm extends Component {
  onAdd(evt) {
    const title = evt.target.value;
    this.props.onAdd(title);
  }

  render() {
    return (
      <>
        <input type="text"/>
        <button className="fontawesom something..." onClick={this.onAdd}>submit</button>
      </>
    )
  }
}

export default InputForm;