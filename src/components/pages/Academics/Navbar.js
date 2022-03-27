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
      </div>
    );
  }
}

export default Navbar;
