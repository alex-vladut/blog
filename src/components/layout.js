import React from "react";

import Nav from "./Nav";

import "./layout.css";

const Layout = ({ children }) => (
  <div className="layout">
    <Nav />
    <main className="main">{children}</main>
  </div>
);

export default Layout;
