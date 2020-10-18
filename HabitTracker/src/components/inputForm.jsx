import React, { PureComponent } from "react";
import "./inputForm.css";

class InputForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const title = this.inputRef.current.value;
    title && this.props.onAdd(title);
  };

  render() {
    return (
      <form className="inputForm" onSubmit={this.onSubmit}>
        <input
          className="inputForm__input"
          type="text"
          onChange={this.inputText}
          ref={this.inputRef}
        />
        <button
          type="submit"
          className="inputForm__button"
          onClick={this.onAdd}
        >
          Add
        </button>
      </form>
    );
  }
}

export default InputForm;
