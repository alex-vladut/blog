import React from "react";

import Nav from "./nav";

import "./layout.css";

export const Layout = ({ children }) => (
  <div>
    <Nav />
    <main className="main">{children}</main>
  </div>
);
