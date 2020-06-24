import React from "react";
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/profile"
              exact
            >Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dialogs"
              exact
            >Dialogs</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar