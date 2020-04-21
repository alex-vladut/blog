import React, { useState } from "react";
import { Link } from "gatsby";

import { BurgerMenu } from "./burger-menu";
import { NavSide } from "./nav-side";

import "./nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {open ? <NavSide close={handleToggle} /> : null}
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
        <BurgerMenu isOpen={open} toggle={handleToggle} />
      </nav>
    </>
  );
};

export default Nav;
