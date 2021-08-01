import React from 'react';

import { Helmet } from 'react-helmet';
import Appbar from './Appbar';

export const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Carlos Contreras</title>
      </Helmet>
      <Appbar />
      {children}
    </div>
  );
};
