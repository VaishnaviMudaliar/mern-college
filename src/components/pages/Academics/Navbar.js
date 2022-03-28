import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li classname="navbar-toggle"></li>
            <Link to="#" className="menu-bars">
              <FaIcons.AiOutlineClose />
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
