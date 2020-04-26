import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import './hero.css';

const Background = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  transform: scale(1);
  background-position: center;
  background-size: cover;
`;

const SocialLink = styled('a')`
  padding-right: 1em;
  font-size: 1.25rem;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    color: var(--color-2);
  }
`;

export const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "background.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Background fluid={image.sharp.fluid} fadeIn="soft">
      <div className="home-container">
        <h1 className="home-title">
          <span className="has-secondary-color">Hello,</span> I'm
          <br /> Alex Vladut
        </h1>
        <div
          css={css`
            display: flex;
          `}
        >
          <SocialLink href="https://www.linkedin.com/in/alexandru-vladut/">
            <FontAwesomeIcon icon={faLinkedinIn} />
            {' LinkedIn'}
          </SocialLink>
          <SocialLink href="https://github.com/alex-vladut">
            <FontAwesomeIcon icon={faGithub} />
            {' GitHub'}
          </SocialLink>
        </div>
        <p>
          We bring your ideas to life by designing, implementing and deploying
          your fully
          <strong>
            <i> responsive</i>
          </strong>
          , highly
          <strong>
            <i> performant </i>
          </strong>
          and
          <strong>
            <i> secure </i>
          </strong>
          web application.
        </p>
        <Link className="btn cta" to="/contact">
          Contact us
        </Link>
        <div className="button-go-down">
          <a href="#services">
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>
      </div>
    </Background>
  );
};
