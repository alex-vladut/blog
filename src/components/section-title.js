import React from 'react';
import { css } from '@emotion/core';

export const SectionTitle = ({ children }) => (
  <h2
    css={css`
      line-height: 1.5em;
      letter-spacing: -0.025px;
      padding: 1.5em 0;
      margin: 0;
      font-size: 3.371rem;
      text-transform: none;
      color: var(--color-1);
    `}
  >
    {children}
  </h2>
);
