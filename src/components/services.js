import React from 'react';
import {
  faMobileAlt,
  faRocket,
  faUserLock,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './services.css';

export const Services = () => (
  <div id="services" className="home-services">
    <span>services</span>
    <h2>
      <span className="has-secondary-color">Our</span> Services
    </h2>
    <section className="home-services-items">
      <div>
        <div className="icon has-secondary-color">
          <FontAwesomeIcon icon={faLaptopCode} />
        </div>
        <h4 className="title">Development</h4>
        <div className="content">
          We deliver applications that look great and delight your customers.
        </div>
      </div>
      <div>
        <div className="icon has-secondary-color">
          <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <h4 className="title">Responsive</h4>
        <div className="content">
          Your website will look great regardless from which devices your
          customers will access it.
        </div>
      </div>
      <div>
        <div className="icon has-secondary-color">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        <h4 className="title">Performant</h4>
        <div className="content">
          It's proven that users will leave your website if it doesn't load
          quickly, so we will design the website from the start to be fast and
          load instantaneously.
        </div>
      </div>
      <div>
        <div className="icon has-secondary-color">
          <FontAwesomeIcon icon={faUserLock} />
        </div>
        <h4 className="title">Secure</h4>
        <div className="content">
          It's more important than ever to protect your users from malicious
          attacks, so we will implement a high level of security right from the
          start.
        </div>
      </div>
    </section>
    <p>
      <a className="has-line-before" href="#download">
        Download Resume
      </a>
    </p>
  </div>
);
