import React from 'react';

import { Info } from '../components/info';
import { Layout, PageTitle } from '../components/Layout';

function index() {
  return (
    <Layout>
      <Info />
    </Layout>
  );
}

export default index;

export const Head = () => <PageTitle title="Home" />;
