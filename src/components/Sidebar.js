import React from "react";
import logo from "./photos/Logo.png";
import "./style.css";

const Sidebar = (props) => {
  return (
    <div>
      <nav className="sidebar">
        <navList className="navList">
          <img className="logo" alt="logo" src={logo} />

          <ul className="navItems">
            <li>About</li>
            <li>Skills</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>

          <ul className="navIcons">@_chiemena</ul>
        </navList>
      </nav>
    </div>
  );
};

export default Sidebar;
