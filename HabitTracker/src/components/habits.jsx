import React, { Component } from "react";
import Habit from "./habit";
import './habits.css';

class Habits extends Component {
  render() {
    const {
      habits,
      handleInclement,
      handleDecrement,
      handleAdd,
      handleRemove } = this.props;
    return (
      <ul className="habits">
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleInclement}
            onDecrement={handleDecrement}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
