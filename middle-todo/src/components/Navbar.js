import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-info">
      <div className="navbar-brand" href="#">Note APP</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              exact
            >Home</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              className="nav-link"
              to="/about">
              About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}