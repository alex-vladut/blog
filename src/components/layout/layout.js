import React from 'react';

import { Nav } from './nav';
import { Footer } from './footer';

import './layout.css';

export const Layout = ({ children }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);
