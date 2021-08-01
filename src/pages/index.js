import React from 'react';

import { Helmet } from 'react-helmet';

import { Appbar } from '../components/Appbar';
import { Info } from '../components/Info';

import '../style.css';

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Carlos Contreras</title>
      </Helmet>
    </div>
  );
}

export default index;
