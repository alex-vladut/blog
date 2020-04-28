import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
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

const Background = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: scale(1);
  background-color: white;
  background-position: center;
  background-size: cover;
  transition: all 1s;
  filter: grayscale(70%);
`;

const Item = ({ image, title, url }) => (
  <div
    css={css`
      padding: 1em;
      background-color: #2222;
      border-radius: 1em;
      box-shadow: 0px 1px 15px -3px var(--color-1);

      + * {
        margin-top: 1.5rem;
      }
    `}
  >
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 10em;

        &:hover > div {
          transform: scale(1.2);
          filter: grayscale(0%);
        }
      `}
    >
      <Background fluid={image.sharp.fluid} fadeIn="soft" />
    </a>
    <div
      css={css`
        color: var(--color-1);
        text-align: center;
        padding-top: 1em;
        font-weight: bold;
      `}
    >
      {title}
    </div>
  </div>
);

export const Projects = () => {
  const { image1, image2, image3 } = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "project-01.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "project-02.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "project-03.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Main>
      <SideText>projects</SideText>
      <SectionTitle>Projects</SectionTitle>
      <section>
        <Item
          image={image1}
          title="Shops Overview"
          url="http://shops.viabill.com/"
        />
        <Item
          image={image2}
          title="Sport Activities"
          url="http://sportpal.net/"
        />
        <Item image={image3} title="Personal Website" url="#" />
      </section>
    </Main>
  );
};
