import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { Button } from '../ui/button';
import { Layout } from '../components/layout';

import './contact.css';

const Background = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  transform: scale(1);
  background-position: center;
  background-size: cover;
`;

const Contact = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "contact.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Background fluid={image.sharp.fluid} fadeIn="soft">
        <div className="contact-content">
          <div>
            <h2 className="contact-title">
              <span className="has-secondary-color">Cluj-Napoca,</span> Romania
            </h2>
            <p>22 Main Street, Cluj-Napoca, 40000</p>
          </div>
          <form>
            <input type="text" name="name" placeholder="Name *" />
            <input type="email" name="email" placeholder="Email *" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              placeholder="Message *"
              name="your-message"
              cols="40"
              rows="6"
            />
            <Button>Contact us</Button>
          </form>
        </div>
      </Background>
    </Layout>
  );
};

export default Contact;
