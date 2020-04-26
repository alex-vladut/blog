import React from 'react';

import usePosts from '../hooks/use-posts';

import { Layout } from '../components/layout';
import { Post } from '../components/post';

const Blog = () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Blog</h1>
      {posts.map((post) => (
        <Post post={post} key={post.slug} />
      ))}
    </Layout>
  );
};

export default Blog;
