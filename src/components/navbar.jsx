import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar-main">
        <div className="logo-header">
          <span className="logo" href="#">
            Todo App
          </span>
        </div>

        <ul className="items ms-auto">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Git</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
