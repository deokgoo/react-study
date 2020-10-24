import React, { memo } from 'react';

const Habit = memo((props) => {
  const habitId = props.habit.id;
  const { name, count } = props.habit;

  const onIncrement = () => {
    props.onIncrement(habitId);
  };

  const handleDecrement = () => {
    props.onDecrement(habitId);
  };

  const handleRemove = () => {
    props.onRemove(habitId);
  };

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={onIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <button
        className="habit-button habit-decrese"
        onClick={handleDecrement}
      >
        <i className="fas fa-minus-square"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={handleRemove}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
