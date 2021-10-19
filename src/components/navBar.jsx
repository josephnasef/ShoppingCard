import React  from "react";
import {NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    //   <nav className="navbar navbar-dark bg-dark">
    //   <a
    //     className="navbar-brand"
    //     href="https://getbootstrap.com/docs/4.4/components/navbar/"
    //   >
    //     Navbar
    //   </a>
    //   <span className="badge badge-primary">{props.productCount}</span>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>           
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>           
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Shoping Cart :
              <span className="badge badge-primary ml-2">
                <i className="fas fa-shopping-cart"></i> {props.productCount}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
