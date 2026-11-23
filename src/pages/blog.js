import React from 'react';

import { graphql } from 'gatsby';

import { Card, CardGrid } from '../components/card';
import { Layout, PageTitle } from '../components/Layout';

const Blog = ({ data }) => {
  const blogList = data.allBlogYaml?.edges ?? [];

  return (
    <Layout>
      <main className="container pb-5">
        <div className="my-5" />
        <h1 className="code mb-4" style={{ color: '#FFC66D' }}>
          blog<span style={{ color: '#CC7832' }}>.</span>
        </h1>
        <CardGrid>
          {blogList.map(({ node }) => (
            <Card
              key={node.id}
              {...node}
              linkLabel="Read article"
              openInNewTab
            />
          ))}
        </CardGrid>
      </main>
    </Layout>
  );
};

export default Blog;

export const Head = () => <PageTitle title="Blog" />;

export const query = graphql`
  {
    allBlogYaml {
      edges {
        node {
          title
          subtitle
          link
          image
          id
        }
      }
    }
  }
`;
