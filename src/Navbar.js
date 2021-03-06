import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="nn_header">
        <div className="container">
          <nav className="nn_navbar">
          <NavLink className="naeem nn_menuItem" to="/">👨🏻‍💻 Naeem</NavLink>
            <ul className="nn_menu">
              <li className="nn_menuItem">
                <NavLink to="/about/">About</NavLink>
              </li>
              <li className="nn_menuItem">
                <NavLink to="/blog/">Blog</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
