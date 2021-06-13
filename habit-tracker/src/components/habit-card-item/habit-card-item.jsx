import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './habit-card-item.css';

class HabitCardItem extends Component {
  handleIncrement = _ => {
    const { id, handleIncrementCallback } = this.props;
    handleIncrementCallback(id);
  }
  handleDecrement = _ => {
    const { id, handleDecrementCallback } = this.props;
    handleDecrementCallback(id);
  };
  handleDelete = _ => {
    const { id, handleDeleteCallback } = this.props;
    handleDeleteCallback(id);
  }
  render() {
    return (
      <li className="habit">
        <span className="habit-name">{this.props.title}</span>
        <span className="habit-count">{this.props.cnt}</span>
        <button className="habit-button habit-increase" 
          onClick={this.handleIncrement}>
          <i className="fas fa-plus-square">
          </i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-trash">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

HabitCardItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  cnt: PropTypes.number,
  handleIncrementCallback: PropTypes.func,
  handleDecrementCallback: PropTypes.func,
  handleDeleteCallback: PropTypes.func,
};

export default HabitCardItem;
