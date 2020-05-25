import React from 'react';

import { css } from '@emotion/core';

export const Footer = () => {
  return (
    <footer
      css={css`
        padding: 1rem;
        border-top: 1px solid var(--color-4);
        max-width: var(--max-width);
        margin: 0 auto;
        text-align: center;
        color: var(--color-4);
      `}
    >
      <p>Alex Vladut © 2020</p>
    </footer>
  );
};
