import React from 'react';

import { graphql } from 'gatsby';

import { Card, CardGrid } from '../components/card';
import { Layout, PageTitle } from '../components/Layout';

function Projects({ data }) {
  const projectList = data.allProjectsYaml.edges;

  return (
    <Layout>
      <main className="mx-auto max-w-[71.25rem] px-md py-2xl">
        <h1 className="mb-lg font-code text-[2.5rem] leading-tight font-medium text-action">
          projects
          <span className="text-[color:hsl(var(--workbench-syntax-keyword))]">
            .
          </span>
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
