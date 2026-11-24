import React from 'react';

import { Link } from 'gatsby';

import { swipeOnClick } from '../navigation-transition';

export const Intent = ({ children, to }) => (
  <Link
    className="inline-flex min-h-[44px] items-center rounded-md px-xs text-label whitespace-nowrap text-[color:hsl(var(--text-secondary))] no-underline hover:surface-primary hover:text-action focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:hsl(var(--primary))] aria-[current=page]:surface-primary aria-[current=page]:text-action sm:px-sm"
    to={to}
    onClick={(event) => swipeOnClick(event, to)}
  >
    {children}
  </Link>
);
