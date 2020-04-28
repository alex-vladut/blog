import React from 'react';

import { Layout } from '../components/layout';
import {
  Hero,
  Services,
  Skills,
  Projects,
  Certifications,
} from '../components/home';

const Home = () => (
  <Layout>
    <Hero />
    <Services />
    <Projects />
    <Skills />
    <Certifications />
  </Layout>
);

export default Home;
