import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  faJava,
  faJs,
  faReact,
  faAngular,
  faDocker,
  faNodeJs,
  faAws,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import {
  faStickyNote,
  faPrescription,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SectionTitle } from '../section-title';

const Main = styled('div')`
  position: relative;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1em;
`;

const Item = ({ icon, name }) => {
  return (
    <div
      css={css`
        display: inline-block;
        background-color: var(--color-2);
        padding: 1em;
        border-radius: 1.5em;
        margin: 0.5rem;
      `}
    >
      <FontAwesomeIcon icon={icon} />
      &nbsp;{name}
    </div>
  );
};

export const Skills = () => {
  return (
    <Main>
      <SectionTitle>
        <span className="has-secondary-color">My</span> Skills
      </SectionTitle>
      <section>
        <Item icon={faJava} name="Java" />
        <Item icon={faJs} name="JavaScript" />
        <Item icon={faNodeJs} name="Node.js" />
        <Item icon={faAngular} name="Angular" />
        <Item icon={faReact} name="React" />
        <Item icon={faPrescription} name="RxJS" />
        <Item icon={faAws} name="AWS" />
        <Item icon={faDocker} name="Docker" />
        <Item icon={faGithub} name="GitHub" />
        <Item icon={faGitlab} name="GitLab" />
        <Item icon={faStickyNote} name="Domain Driven Design" />
      </section>
    </Main>
  );
};
