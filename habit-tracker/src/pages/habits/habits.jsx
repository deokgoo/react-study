import { Component } from 'react';
import HabitCardItem from '../../components/habit-card-item';

class Habits extends Component {
  state = {
    habits: [
      {
        id: 1,
        title: 'someTitle',
        cnt: 0,
      },
      {
        id: 2,
        title: 'someTitle2',
        cnt: 0,
      }
    ]
  }

  handleIncrementCallback() {
    console.log(1);
  }
  handleDecrementCallback() {
    console.log(2);
  }
  handleDeleteCallback() {
    console.log(3);
  }

  render() {
    return (
      <div className="habits">
        {
          this.state.habits.map(x => 
            <HabitCardItem 
                key={x.id} 
                title={x.title} 
                cnt={x.cnt}
                handleIncrementCallback={this.handleIncrementCallback}
                handleDecrementCallback={this.handleDecrementCallback}
                handleDeleteCallback={this.handleDeleteCallback}>
            </HabitCardItem>
          )
        }
      </div>
    )
  }
}

export default Habits;