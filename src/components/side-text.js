import React from 'react';
import { css } from '@emotion/core';

export const SideText = ({ children }) => (
  <span
    css={css`
      position: absolute;
      top: 50%;
      left: 0%;
      overflow: hidden;
      transition: all 0.5s 0.6s ease-out;
      transform: translate(-50%, -50%) rotate(-90deg);
      white-space: nowrap;
      letter-spacing: 0;
      font-size: 5rem;
      font-weight: 600;
      text-align: center;
      text-transform: lowercase;
      opacity: 0.05;
      color: var(--color-1);
    `}
  >
    {children}
  </span>
);
