import React from 'react';

import { Layout } from '../components/layout';
import { Hero } from '../components/home/hero';
import { Services } from '../components/home/services';
import { Certifications } from '../components/home/certifications';

const Home = () => (
  <Layout>
    <Hero />
    <Services />
    <Certifications />
  </Layout>
);

export default Home;
