import React from "react";
import logo from "../images/jupiter.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <img src={logo} width="72px" alt=""/>
          </div>
          <div className="col-2 ">
            <i className="material-icons mod3">home</i>
            <a href="#contact">Home</a>
          </div>
          <div className="col-2 ">
            <i className="material-icons mod3">store_mall_directory</i>
            <a href="#about">News</a>
          </div>
          <div className="col-2 ">
            <i className="material-icons mod3">people_outline</i>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="col-3 mod2">
            <form className="d-flex ">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search in Jupi"
                aria-label="Search"
              />
              <i className="material-icons mod3">search</i>
            </form>
          </div>
          {/* CartWidget component */}
          <div className="col-2 mod-2">
            <CartWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
