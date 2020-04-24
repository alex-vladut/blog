import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./hero.css";

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
          {" LinkedIn"}
        </a>
        <a href="https://github.com/alex-vladut">
          <FontAwesomeIcon icon={faGithub} />
          {" GitHub"}
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
        aut consequuntur aspernatur corrupti ratione, odit similique tenetur
        accusantium, est nostrum esse minus iure voluptatum nihil cumque
        blanditiis non? Odit.
      </p>
    </div>
  </div>
);
