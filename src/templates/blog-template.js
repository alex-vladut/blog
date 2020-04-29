import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

import { Layout } from '../components/layout';
import { ReadLink } from '../components/read-link';

import './blog-template.css';

const Main = styled('div')`
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1em;
  margin-top: 5rem;
`;

const BlogTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Main>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/blog">&larr; back to all posts</ReadLink>
    </Main>
  </Layout>
);

export default BlogTemplate;

export const postQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`;
