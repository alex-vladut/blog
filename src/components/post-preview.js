import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { ReadLink } from './read-link';

export const PostPreview = ({ post }) => (
  <article
    css={css`
      display: flex;
      margin-top: 2rem;
      padding: 1em;
      background-color: #2222;
      box-shadow: 0px 1px 15px 1px var(--color-1);
      :last-of-type {
        margin-bottom: 2rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        width: 10rem;
        height: 10rem;
        position: relative;
        overflow: hidden;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </article>
);
