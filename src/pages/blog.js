import React from 'react';
import styled from '@emotion/styled';

import usePosts from '../hooks/use-posts';

import { Layout } from '../components/layout';
import { PostPreview } from '../components/post-preview';

const Main = styled('div')`
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1em;
  margin-top: 5rem;
`;

const Blog = () => {
  const posts = usePosts();
  return (
    <Layout>
      <Main>
        <h1>Blog</h1>
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </Main>
    </Layout>
  );
};

export default Blog;
