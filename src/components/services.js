import React from 'react';
import {
  faLaptopCode,
  faMobileAlt,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './services.css';

export const Services = () => (
  <div className="home-services">
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
          Working with client and community, we deliver masterplans that create
          vibrant new places and spaces, attract people, and encourage
          investment through.
        </div>
      </div>
      <div>
        <div className="icon has-secondary-color">
          <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <h4 className="title">Responsive Design</h4>
        <div className="content">
          Working with client and community, we deliver masterplans that create
          vibrant new places and spaces, attract people, and encourage
          investment through.
        </div>
      </div>
      <div>
        <div className="icon has-secondary-color">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <h4 className="title">Clean Code</h4>
        <div className="content">
          Working with client and community, we deliver masterplans that create
          vibrant new places and spaces, attract people, and encourage
          investment through.
        </div>
      </div>
    </section>
    <p>
      <a className="has-line-before" href="#">
        Download Resume
      </a>
    </p>
  </div>
);
