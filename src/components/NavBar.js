import React from "react";
import logo from "../images/jupiter.png";

function Navbar() {
  return (
    <div className="navbar">
      <ul class="#d7ccc8 brown lighten-4">
        <li>
        <img src={logo} width="125px" />
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#about">About Jupi</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
