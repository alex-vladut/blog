import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import { API, graphqlOperation } from '@aws-amplify/api';
import * as mutations from '../graphql/mutations';

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
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const input = { name, email, subject, message };
      API.graphql(graphqlOperation(mutations.sendMessage, { input }));
      setSent(true);
      resetForm();
    }
  };
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
          <form onSubmit={handleSubmit}>
            {sent ? (
              <div
                css={css`
                  color: lightgreen;
                  margin-bottom: 0.5em;
                `}
              >
                Thanks for your message. We will get back to you in the shortest
                time possible.
              </div>
            ) : null}
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <textarea
              placeholder="Message *"
              name="your-message"
              cols="40"
              rows="6"
              value={message}
              onChange={handleMessageChange}
            />
            <Button submit>Contact us</Button>
          </form>
        </div>
      </Background>
    </Layout>
  );
};

export default Contact;
