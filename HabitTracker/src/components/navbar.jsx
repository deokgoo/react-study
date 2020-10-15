import React, { Component } from "react";
import './navbar.css'

class Navbar extends Component {
  render() {
    const { count } = this.props;
    return (
      <div id="navbar">
        <div className="navbar__icon far fa-check-square"></div>
        <span className="navbar__title">Habit Tracker</span>
        <span className="navbar__count">{count}</span>
      </div>
    );
  }
}

export default Navbar;
