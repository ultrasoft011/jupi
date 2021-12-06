import React from "react";
import logo from "../images/jupiter.png";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <div className="navbar">
      <ul class="#f3e5f5 purple lighten-5">
        <div class="grid-container">
          <li>
            {" "}
            <img class="jupiter-logo" src={logo} width="85px" />
          </li>
          <li>
            <i class="material-icons">home</i>
            <a href="#contact">Home</a>
          </li>
          <li>
            <i class="material-icons">store_mall_directory</i>
            <a href="#about">News</a>
          </li>
          <li class="search-bar"></li>

          <li>
            <i class="material-icons">people_outline</i>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <i class="material-icons">web</i>
            <a href="#about">About Jupi</a>
          </li>
          <div class="grid-container">
            <li class="search-bar">
              <nav>
                <div class="nav-wrapper #424242 grey darken-3">
                  <form>
                    <div class="input-field ">
                      <input id="search" type="search" required />
                      <label class="label-icon" for="search">
                        <i class="material-icons ">search</i>
                      </label>
                      <i class="material-icons ">close</i>
                    </div>
                  </form>
                </div>
              </nav>
            </li>
          </div>
          <CartWidget />
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
