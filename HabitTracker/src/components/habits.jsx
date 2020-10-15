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
      onRemove } = this.props;
    return (
      <ul className="habits">
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
    );
  }
}

export default Habits;
