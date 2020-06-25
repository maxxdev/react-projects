import React from "react";
import {NavLink} from "react-router-dom";
//import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink
        className="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        to="/"
        exact
      >IT Camasutra</NavLink>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
              data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <NavLink
            className="nav-link"
            to="/logout"
            exact
          >Sign out</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

