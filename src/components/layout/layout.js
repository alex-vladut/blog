import React from 'react';
import { Global, css } from '@emotion/core';
import { Helmet } from 'react-helmet';

import { Nav } from './nav';
import { Footer } from './footer';
import useSiteMetadata from '../../hooks/use-sitemetadata';

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          :root {
            box-sizing: border-box;
            --color-1: white;
            --color-2: #c32865;
            --color-3: #1c1c1c;
            --color-4: #8888;
            --max-width: 2000px;
            --max-content-width: 1080px;
            --z-nav-footer: 100;
            --z-nav-side: 200;
          }

          *,
          ::before,
          ::after {
            box-sizing: inherit;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            overflow-x: hidden;
          }

          body {
            background-color: var(--color-3);
            color: var(--color-1);
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
