import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

import './hero.css';

export const Hero = () => (
  <div className="home-background">
    <div className="home-container">
      <h1 className="home-title">
        <span className="has-secondary-color">Hello,</span> I'm
        <br /> Alex Vladut
      </h1>
      <div className="home-social-media">
        <a href="https://www.linkedin.com/in/alexandru-vladut/">
          <FontAwesomeIcon icon={faLinkedinIn} />
          {' LinkedIn'}
        </a>
        <a href="https://github.com/alex-vladut">
          <FontAwesomeIcon icon={faGithub} />
          {' GitHub'}
        </a>
      </div>
      <p>
        We bring your ideas to life by designing, implementing and deploying
        your fully
        <strong className="has-secondary-color">
          <i> responsive</i>
        </strong>
        , highly
        <strong className="has-secondary-color">
          <i> performant </i>
        </strong>
        and
        <strong className="has-secondary-color">
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
  </div>
);
