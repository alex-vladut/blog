import React from "react";
import { Link } from "gatsby";

import "./nav.css";

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeClassName="active" to="/about">
          About
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeClassName="active" to="/blog">
          Blog
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
