import React, { Component } from 'react';
import './habit.css';

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = evt => {
    this.setState({ count: this.state.count + 1 })
  };
  handleDecrement = evt => {
    const cnt = this.state.count - 1;
    this.setState({ count: cnt < 0 ? 0 : cnt });
  }
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square">
          </i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-trash">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit;
