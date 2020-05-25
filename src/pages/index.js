import React from 'react';
import Amplify from '@aws-amplify/core';
import config from '../aws-exports';

import { Layout } from '../components/layout';
import {
  Hero,
  Services,
  Skills,
  Projects,
  Certifications,
} from '../components/home';

Amplify.configure(config);

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
