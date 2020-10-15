import React, { PureComponent } from "react";

class habit extends PureComponent {
  onIncrement = () => {
    this.props.onIncrement(this.props.habit.id);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit.id);
  };

  handleRemove = () => {
    this.props.onRemove(this.props.habit.id);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.onIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrese"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleRemove}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default habit;
