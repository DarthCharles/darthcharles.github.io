import React from 'react';

import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { Card } from '../components/Card';

const Blog = ({ data }) => {
  const projectList = data.allBlogYaml.edges;

  return (
    <Layout>
      <div className="row">
        {projectList.map(({ node }) => {
          const a = require(`../images/${node.image}`);
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
              cardImage={a}
              key={node.id}
            />
          );
        })}
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
