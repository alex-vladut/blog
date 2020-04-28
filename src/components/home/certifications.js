import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SideText } from '../side-text';
import { SectionTitle } from '../section-title';

const Main = styled('div')`
  position: relative;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1em;
`;

const Item = ({ icon, title, date, children }) => (
  <div
    css={css`
      padding-top: 3rem;
      padding-bottom: 3rem;
      border-top: 1px solid #fff;
    `}
  >
    <h5
      css={css`
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.333;
        margin: 0 0 0.5rem;
        color: #fff;
      `}
    >
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      &nbsp;{title}
    </h5>
    <span
      css={css`
        font-style: italic;
        font-size: 1.25rem;
        color: lightgray;
      `}
    >
      {date}
    </span>
    <p
      css={css`
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.025em;
        line-height: 1.9428;
        text-transform: none;
        color: var(--color-4);
      `}
    >
      {children}
    </p>
  </div>
);

export const Certifications = () => {
  return (
    <Main>
      <SideText>certifications</SideText>
      <SectionTitle>
        <span className="has-secondary-color">My</span> Certifications
      </SectionTitle>
      <section>
        <Item
          icon={faAws}
          title="AWS Certified Security - Specialty"
          date="Issued Aug 2018"
        >
          The certification proves that the candidate has an understanding of
          specialized data classifications and AWS data protection mechanisms,
          data encryption methods and AWS mechanisms to implement them and a
          working knowledge of AWS security services and features of services to
          provide a secure production environment.
        </Item>
        <Item
          icon={faAws}
          title="AWS Certified SysOps Administrator - Associate"
          date="Issued Jun 2018"
        >
          The certification proves that the candidate is proficient in deployng,
          managing, and operating scalable, highly available, and fault-tolerant
          systems on AWS, selecting the appropriate AWS service based on
          compute, data, or security requirements and identifying appropriate
          use of AWS operational best practices.
        </Item>
        <Item
          icon={faAws}
          title="AWS Certified Developer - Associate"
          date="Issued Jun 2018"
        >
          The certification proves that the candidate demonstrate an
          understanding of core AWS services, uses, and basic AWS architecture
          best practices as well as showing proficiency in proficiency in
          developing, deploying, and debugging cloud-based applications using
          AWS.
        </Item>
        <Item
          icon={faAws}
          title="AWS Certified Solutions Architect - Associate"
          date="Issued Apr 2018"
        >
          The certification proves the candidate effectively demonstrate
          knowledge of how to architect and deploy secure and robust
          applications on AWS technologies and is able to provide implementation
          guidance based on best practices to the organization throughout the
          life cycle of the project.
        </Item>
        <Item
          icon={faAws}
          title="AWS Certified Cloud Practitioner"
          date="Issued Apr 2018"
        >
          The AWS Certified Cloud Practitioner examination is intended for
          individuals who have the knowledge and skills necessary to effectively
          demonstrate an overall understanding of the AWS Cloud, independent of
          specific technical roles addressed by other AWS Certifications.
        </Item>
        <Item
          icon={faJava}
          title="Oracle Certified Associate, Java SE 8 Programmer"
          date="Issued Dec 2016"
        >
          This certification proves that the candidate has a deep understanding
          of the Java programmng language syntax. The exam focuses on variables,
          class and interface definitions, arrays, exception handling,
          encapsulation, polymorphism, and flow control.
        </Item>
      </section>
    </Main>
  );
};
