import React, { memo } from "react";
import "./habitAddForm.css";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const title = inputRef.current.value;
    title && props.onAdd(title);
  };

  return (
    <form ref={formRef} className="habitAddForm" onSubmit={onSubmit}>
      <input
        className="habitAddForm__input"
        type="text"
        ref={inputRef}
        placeholder="Habit"
      />
      <button
        type="submit"
        className="habitAddForm__button"
      >
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;
