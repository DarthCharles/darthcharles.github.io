import React from 'react';

import { graphql } from 'gatsby';

import Card from '../components/Card';
import { Layout } from '../components/Layout';

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges;

  return (
    <Layout>
      <div className="row">
        {projectList.map(({ node }) => {
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.subtitle}
              link={node.link}
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
          id
        }
      }
    }
  }
`;
