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
      <>
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
        <button className="btn-reset" onClick={onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
