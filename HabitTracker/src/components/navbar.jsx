import React, { memo } from 'react';
import './navbar.css';

const Navbar = memo((props) => {
  const { count } = props;
  return (
    <div id="navbar">
      <div className="navbar__icon far fa-check-square"></div>
      <span className="navbar__title">Habit Tracker</span>
      <span className="navbar__count">{count}</span>
    </div>
  );
});

export default Navbar;
