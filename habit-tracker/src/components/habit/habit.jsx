import React, { Component } from 'react';
import './habit.css';

class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <i className="fas fa-plus-square">
          </i>
        </button>
        <button className="habit-button habit-decrease">
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
