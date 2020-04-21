import React from "react";
import { Link } from "gatsby";

import "./nav-side.css";

export const NavSide = ({ close }) => {
  return (
    <>
      <div
        className="overlay"
        onClick={close}
        role="button"
        tabIndex={0}
      />
      <div className="nav-side">
        <ul className="nav-side-list">
          <li className="nav-side-list-item">
            <Link activeClassName="active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-side-list-item">
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </li>
          <li className="nav-side-list-item">
            <Link activeClassName="active" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-side-list-item">
            <Link activeClassName="active" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
