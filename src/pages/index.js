import React from "react";

import { Layout } from "../components/layout";

import "./index.css";

const Home = () => (
  <Layout>
    <div className="background-image" />
    <div className="home-header">
      <h1 className="title">
        <span className="has-secondary-color">Hello,</span> I'm
        <br /> Alex Vladut
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
        aut consequuntur aspernatur corrupti ratione, odit similique tenetur
        accusantium, est nostrum esse minus iure voluptatum nihil cumque
        blanditiis non? Odit.
      </p>
    </div>
  </Layout>
);

export default Home;
