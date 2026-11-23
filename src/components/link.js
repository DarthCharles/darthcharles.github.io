import React from 'react';

import { Link } from 'gatsby';

export const Intent = ({ children, to }) => {
  return (
    <Link
      className="nav-link"
      to={to}
      activeStyle={{
        color: 'white',
      }}
      style={{
        color: 'grey',
      }}
    >
      {children}
    </Link>
  );
};
