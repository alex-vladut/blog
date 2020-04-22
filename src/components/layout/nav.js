import React, { useState } from "react";
import { Link } from "gatsby";

import { BurgerMenu } from "./burger-menu";
import { NavSide } from "./nav-side";

import "./nav.css";

const routes = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" }
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(prev => !prev);
  };
  return (
    <>
      {open ? <NavSide close={handleToggle} /> : null}
      <nav>
        <ul className="nav-list">
          {routes.map(({ name, url }) => (
            <li className="desktop-only">
              <Link activeClassName="active" to={url}>
                {name}
              </Link>
            </li>
          ))}
          <li>
            <BurgerMenu isOpen={open} toggle={handleToggle} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
