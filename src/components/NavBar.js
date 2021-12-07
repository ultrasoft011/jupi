import React from "react";
import logo from "../images/jupiter.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-1">
            <img src={logo} width="72px" />
          </div>
          <div class="col-2 ">
            <i class="material-icons mod3">home</i>
            <a href="#contact">Home</a>
          </div>
          <div class="col-2 ">
            <i class="material-icons mod3">store_mall_directory</i>
            <a href="#about">News</a>
          </div>
          <div class="col-2 ">
            <i class="material-icons mod3">people_outline</i>
            <a href="#contact">Contact Us</a>
          </div>
          {/* <div class="col-2">
            <i class="material-icons  mod3">web</i>
            <a href="#about">About Jupi</a>
          </div> */}
          <div class="col-3 mod2">
            <form class="d-flex ">
              <input
                class="form-control me-2 "
                type="search"
                placeholder="Search in Jupi"
                aria-label="Search"
              />
              <i class="material-icons mod3">search</i>
            </form>
          </div>
          <div class="col-2 mod-2">
            <CartWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
