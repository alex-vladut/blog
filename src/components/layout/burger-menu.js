import React from "react";

import "./burger-menu.css";

const getClasses = isOpen =>
  (isOpen ? ["burgeer-container", "change"] : ["burgeer-container"]).join(" ");

export const BurgerMenu = ({ isOpen, toggle }) => (
  <button className={getClasses(isOpen)} onClick={toggle}>
    {[1, 2, 3].map(i => (
      <div className={`bar${i}`} />
    ))}
  </button>
);
