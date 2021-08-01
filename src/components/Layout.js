import React from 'react';

import { Helmet } from 'react-helmet';

import { Appbar } from './Appbar';

export const Layout = ({ children, title = 'Home' }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title} | Carlos Contreras`}</title>
      </Helmet>
      <Appbar />
      {children}
    </div>
  );
};
