import React from 'react';

import { Layout } from '../components/layout';
import { Hero } from '../components/home/hero';
import { Services } from '../components/home/services';

const Home = () => (
  <Layout>
    <Hero />
    <Services />
  </Layout>
);

export default Home;
