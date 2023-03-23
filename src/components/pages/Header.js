import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "navbar-brand active" : "navbar-brand"
          }
        >
          --RPJ SAZON
        </NavLink>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
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
          <li className="nav-item active">
            <NavLink
              to="project"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Project
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              to="contact"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
