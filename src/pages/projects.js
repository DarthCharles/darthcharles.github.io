import React from 'react';

import { graphql } from 'gatsby';

import { Card } from '../components/card';
import { Layout, PageTitle } from '../components/Layout';

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges;

  return (
    <Layout>
      <div className="container">
        <div className="my-5" />
        <div className="h1 code mb-4" style={{ color: '#CC7832' }}>
          <span style={{ color: '#FFC66D' }}>projects</span>
          <span style={{ color: '#CC7832' }}>.</span>
        </div>
        <div className="row">
          {projectList.map(({ node }) => {
            const cardImage = require(`../images/${node.image}`).default;
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
}

export default Projects;

export const Head = () => <PageTitle title="Projects" />;

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
