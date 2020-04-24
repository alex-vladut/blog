import React from "react";

import { Layout } from "../components/layout";
import { Hero } from "../components/hero";
import { Services } from "../components/services";

import "./index.css";

const Home = () => (
  <Layout>
    <Hero />
    <Services />
  </Layout>
);

export default Home;
