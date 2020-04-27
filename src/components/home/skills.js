import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { SideText } from '../side-text';
import { SectionTitle } from '../section-title';

const Main = styled('div')`
  position: relative;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1em;
`;

const Item = ({ title, percentage }) => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5em;
        `}
      >
        <span>{title}</span>
        <span>{percentage}%</span>
      </div>
      <div
        css={css`
          transition-delay: 0.2s;
          transition: width 0.5s ease-out;
          height: 3rem;
          background-color: #222;
        `}
      >
        <div
          css={css`
            width: ${percentage}%;
            background-color: var(--color-2);
            height: 100%;
          `}
        ></div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <Main>
      <SideText>skills</SideText>
      <SectionTitle>
        <span className="has-secondary-color">My</span> Skills
      </SectionTitle>
      <section>
        <Item title="Java" percentage="60" />
      </section>
    </Main>
  );
};
