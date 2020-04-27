import React from 'react';
import {
  faMobileAlt,
  faRocket,
  faUserLock,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './services.css';

const Item = (props) => (
  <div>
    <FontAwesomeIcon className="icon has-secondary-color" icon={props.icon} />
    <h4 className="title">{props.title}</h4>
    <p className="content">{props.children}</p>
  </div>
);

export const Services = () => (
  <div id="services" className="home-services">
    <span>services</span>
    <h2>
      <span className="has-secondary-color">My</span> Services
    </h2>
    <section className="home-services-items">
      <Item icon={faLaptopCode} title="Full-Stack Development">
        I have extensive experience with developing web applications from
        frontend down to database level and making use of cutting edge
        tehnologies in software industry.
      </Item>
      <Item icon={faMobileAlt} title="Responsive UI">
        The users will access your web application from a variety of devices so
        it's my responsibility to make sure the website looks great regardless
        of the device the clients are accessing it from.
      </Item>
      <Item icon={faRocket} title="Performance">
        Multiple studies have proven already that there is a direct link between
        the conversion rate and the performance of your wbsites (see
        <a
          href="https://trinity.one/insights/user-experience/page-speed-conversion-2019-statistics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;this
        </a>
        ). I will use my skills to build highly performant features right from
        the start and tune performance of existing application.
      </Item>
      <Item icon={faUserLock} title="Security">
        Hearing about many cyberattacks with catastrophical consequnces for
        companies, it's more important than ever to protect your users from data
        leak and malicious attacks. I will make sure security is an integral
        part of every feature developed and the risks of being exposed are kept
        to the minimum.
      </Item>
    </section>
    <p>
      <a className="has-line-before" href="#download">
        Download Resume
      </a>
    </p>
  </div>
);
