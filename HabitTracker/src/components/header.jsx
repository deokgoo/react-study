import React, { Component } from "react";
import './header.css'

class header extends Component {
  render() {
    const { count } = this.props;
    return (
      <div id="header">
        <div className="header__icon far fa-check-square"></div>
        <span className="header__title">Habit Tracker</span>
        <span className="header__count">{count}</span>
      </div>
    );
  }
}

export default header;
