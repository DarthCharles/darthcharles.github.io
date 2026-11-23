import React from 'react';

import { Link } from 'gatsby';

import { swipeOnClick } from '../navigation-transition';

export const Intent = ({ children, to }) => {
  return (
    <Link
      className="nav-link"
      to={to}
      onClick={(event) => swipeOnClick(event, to)}
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
