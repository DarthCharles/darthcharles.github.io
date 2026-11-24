import React from 'react';

import { Button } from '@darthcharles/greda';
import { Link } from 'gatsby';

import { Layout, PageTitle } from '../components/Layout';

function ErrorPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-6xl px-md py-2xl sm:px-lg">
        <h1 className="mb-lg text-title">404 Page Not Found</h1>
        <Button asChild size="lg" className="border-0">
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
    </Layout>
  );
}

export default ErrorPage;

export const Head = () => <PageTitle title="404 Page Not Found" />;
