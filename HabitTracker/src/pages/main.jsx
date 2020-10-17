import React, { Component } from 'react';
import Navbar from '../components/navbar';
import InputForm from '../components/inputForm';
import Habits from '../components/habits';


class Main extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleInclement = (id) => {
    let habits = this.state.habits.map((x) => {
      return x.id !== id ? {...x} : {...x, count: x.count+1};
    });
    this.setState({
      habits,
    });
  };

  handleDecrement = (id) => {
    let habits = this.state.habits.map((x) => {
      return x.id !== id ? {...x} : {...x, count: x.count-1<0?0:x.count-1};
    });
    this.setState({
      habits,
    });
  };

  handleRemove = (id) => {
    let habits = [...this.state.habits];
    habits = habits.filter((habit) => habit.id!==id );
    this.setState({
      habits
    })
  }

  handleAdd = (title) => {
    let habits = [...this.state.habits, {id: Date.now(), name: title, count: 0}];
    this.setState({
      habits,
    })
  }

  handleReset = () => {
    const habits = this.state.habits.map((x) => ({...x, count: 0}));
    this.setState({
      habits,
    })
  }

  render() {  
    const habitsCnt = this.state.habits.length;
    return (
      <div className="main">
        <Navbar count={habitsCnt} />
        <InputForm onAdd={this.handleAdd}/>
        <Habits 
          habits={this.state.habits}
          onInclement={this.handleInclement}
          onDecrement={this.handleDecrement}
          onRemove={this.handleRemove}
          onReset={this.handleReset}
        />
      </div>
    )
  }
}

export default Main;