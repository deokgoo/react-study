import React, { Component } from "react";
import Habit from "./habit";
import './habits.css';

class Habits extends Component {
  render() {
    const {
      habits,
      onInclement,
      onDecrement,
      onAdd,
      onRemove,
      onReset } = this.props;
    return (
      <div className="habits">
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onInclement}
              onDecrement={onDecrement}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </ul>
        <button className="btn-reset" onClick={onReset}>Reset All</button>
      </div>
    );
  }
}

export default Habits;
