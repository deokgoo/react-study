import { Component } from 'react';
import HabitCardItem from '../../components/habit-card-item';

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: {
        1: {
          title: 'someTitle',
          cnt: 0,
        },
        2: {
          title: 'someTitle2',
          cnt: 1,
        }
      }
    }

    this.handleIncrementCallback = this.handleIncrementCallback.bind(this);
    this.handleDecrementCallback = this.handleDecrementCallback.bind(this);
    this.handleDeleteCallback = this.handleDeleteCallback.bind(this);
  }
  handleIncrementCallback(id) {
    const updateHabits = Object.assign({}, this.state.habits);
    updateHabits[id].cnt++;
    this.setState({});
  }
  handleDecrementCallback(id) {
    const updateHabits = Object.assign({}, this.state.habits);
    updateHabits[id].cnt--;
    if(updateHabits[id].cnt < 0) return;

    this.setState({habits: updateHabits});
  }
  handleDeleteCallback(id) {
    const updateHabits = Object.assign({}, this.state.habits);
    delete updateHabits[id];
    
    this.setState({habits: updateHabits});
  }

  render() {
    return (
      <div className="habits">
        {
          Object.keys(this.state.habits).map(x => {
            const item = this.state.habits[x];
            return (
              <HabitCardItem 
                  key={x}
                  id={x}
                  title={item.title} 
                  cnt={item.cnt}
                  handleIncrementCallback={this.handleIncrementCallback}
                  handleDecrementCallback={this.handleDecrementCallback}
                  handleDeleteCallback={this.handleDeleteCallback}>
              </HabitCardItem>)
          })
        }
      </div>
    )
  }
}

export default Habits;