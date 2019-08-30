import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="nn_header">
        <div className="container">
          <nav className="nn_navbar">
            <ul className="nn_menu">
              <li className="naeem nn_menuItem">
                <NavLink to="/">naeemnur</NavLink>
              </li>
              <li className="nn_menuItem">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nn_menuItem">
                <NavLink to="/projects">Projects</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
