import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="project"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;