import React from 'react';

import { Button } from '@darthcharles/greda';
import { ArrowLeft } from '@darthcharles/greda/icons';
import { Link } from 'gatsby';

import { Layout, PageTitle } from '../components/Layout';

function ErrorPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-6xl px-md py-2xl sm:px-lg">
        <h1 className="mb-lg">
          <span className="mb-xs block font-code text-[2.5rem] leading-tight font-medium text-action">
            404
            <span aria-hidden="true" className="text-syntax-keyword">
              .
            </span>
          </span>{' '}
          <span className="block text-title">Page Not Found</span>
        </h1>
        <Button asChild size="lg" className="border-0">
          <Link to="/">
            <ArrowLeft aria-hidden="true" /> Back to Home
          </Link>
        </Button>
      </main>
    </Layout>
  );
}

export default ErrorPage;

export const Head = () => <PageTitle title="404 Page Not Found" />;
