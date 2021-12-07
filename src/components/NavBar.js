import React from "react";
import logo from "../images/jupiter.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-1">
            <img src={logo} width="60px" />
          </div>
          <div class="col-2 mod">
            <i class="material-icons">home</i>
            <a href="#contact">Home</a>
          </div>
          <div class="col-2 mod">
            <i class="material-icons">store_mall_directory</i>
            <a href="#about">News</a>
          </div>
          <div class="col-2 mod">
            <i class="material-icons">people_outline</i>
            <a href="#contact">Contact Us</a>
          </div>
          <div class="col-2 mod">
            <i class="material-icons">web</i>
            <a href="#about">About Jupi</a>
          </div>
          <div class="col-3 mod-2">
            <form class="d-flex ">
              <input
                class="form-control me-2 "
                type="search"
                placeholder="Search in Jupi"
                aria-label="Search"
              />
              <i class="material-icons search-icon">search</i>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;