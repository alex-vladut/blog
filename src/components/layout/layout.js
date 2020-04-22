import React from "react";

import Nav from "./nav";

import "./layout.css";

export const Layout = ({ children }) => (
  <div className="container">
    <Nav />
    <main>{children}</main>
  </div>
);
