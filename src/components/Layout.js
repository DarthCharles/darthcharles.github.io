import React from 'react';

import { Appbar } from './appbar';

export const PageTitle = ({ title }) => (
  <title>{`${title} | Carlos Contreras`}</title>
);

export const Layout = ({ children }) => {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
};
