import React from 'react';

import { Appbar } from '../components/appbar';
import { Info } from '../components/info';
import { PageTitle } from '../components/Layout';

import '../style.css';

function index() {
  return (
    <div>
      <Appbar />
      <Info />
    </div>
  );
}

export default index;

export const Head = () => <PageTitle title="Home" />;
