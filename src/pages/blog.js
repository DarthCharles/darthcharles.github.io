import React from 'react';

import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { Card } from '../components/Card';

const Blog = ({ data }) => {
  const blogList = data.allBlogYaml?.edges ?? [];

  return (
    <Layout title={'Blog'}>
      <div className="container">
        <div className="my-5" />
        <div className="h1 code mb-4" style={{ color: '#CC7832' }}>
          <span style={{ color: '#FFC66D' }}>blog</span>
          <span style={{ color: '#CC7832' }}>.</span>
        </div>
        <div className="row">
        {blogList.map(({ node }) => {
          const cardImage = require(`../images/${node.image}`);
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
              cardImage={cardImage}
              key={node.id}
            />
          );
        })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

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
