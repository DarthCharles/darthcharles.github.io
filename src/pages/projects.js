import React from 'react';

import { graphql } from 'gatsby';

import { Card } from '../components/Card';
import { Layout } from '../components/Layout';

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges;

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
}

export default Projects;

export const query = graphql`
  {
    allProjectsYaml {
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
