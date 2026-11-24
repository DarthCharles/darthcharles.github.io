import React from 'react';

import { graphql } from 'gatsby';

import { Card, CardGrid } from '../components/card';
import { Layout, PageTitle } from '../components/Layout';

const Blog = ({ data }) => {
  const blogList = data.allBlogYaml?.edges ?? [];

  return (
    <Layout>
      <main className="mx-auto max-w-[71.25rem] px-md py-2xl">
        <h1 className="mb-lg font-code text-[2.5rem] leading-tight font-medium text-action">
          blog
          <span className="text-[color:hsl(var(--workbench-syntax-keyword))]">
            .
          </span>
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
