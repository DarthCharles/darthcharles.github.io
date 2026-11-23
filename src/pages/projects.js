import React from 'react';

import { graphql } from 'gatsby';

import { Card, CardGrid } from '../components/card';
import { Layout, PageTitle } from '../components/Layout';

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges;

  return (
    <Layout>
      <main className="container pb-5">
        <div className="my-5" />
        <h1 className="code mb-4" style={{ color: '#FFC66D' }}>
          projects<span style={{ color: '#CC7832' }}>.</span>
        </h1>
        <CardGrid>
          {projectList.map(({ node }) => (
            <Card key={node.id} {...node} />
          ))}
        </CardGrid>
      </main>
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
          linkLabel
          source
          image
          id
        }
      }
    }
  }
`;
