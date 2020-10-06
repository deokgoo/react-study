import React, { Component } from "react";
import Habit from "./habit";
import './habits.css';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleInclement = (id) => {
    let habits = [...this.state.habits];
    const indexOfId = habits.findIndex((habit) => habit.id === id);
    habits[indexOfId].count++;
    this.setState({
      habits,
    })
  };

  handleDecrement = (id) => {
    let habits = [...this.state.habits];
    const indexOfId = habits.findIndex((habit) => habit.id === id);
    if(habits[indexOfId].count<=0) return;
    habits[indexOfId].count--;
    this.setState({
      habits
    })
  };

  handleRemove = (id) => {
    console.log(id);
    let habits = [...this.state.habits];
    habits = habits.filter((habit) => habit.id!==id );
    this.setState({
      habits
    })
  }

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleInclement}
            onDecrement={this.handleDecrement}
            onRemove={this.handleRemove}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
