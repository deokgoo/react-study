import React, { Component } from 'react';
import Header from "./components/header";
import InputForm from "./components/inputForm";
import Habits from "./components/habits";


class Main extends Component {
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
    let habits = [...this.state.habits];
    habits = habits.filter((habit) => habit.id!==id );
    this.setState({
      habits
    })
  }

  handleAdd = (title) => {
    let habits = [...this.state.habits, title];
    this.setState({
      habits,
    })
  }

  render() {
    const habitsCnt = this.state.habits.length;
    return (
      <div className="main">
        <Header count={habitsCnt} />
        <InputForm onAdd={this.hanldeAdd}/>
        <Habits 
          habits={this.state.habits}
          onInclement={this.handleInclement}
          onDecrement={this.handleDecrement}
          onRemove={this.handleRemove}
        />
      </div>
    )
  }
}

export default Main;