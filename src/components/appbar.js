import React from 'react';

import { Intent } from './link';

const pages = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Résumé' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
];

export const Appbar = () => (
  <header className="border-b border-[color:hsl(var(--border-primary))] surface-secondary">
    <nav
      aria-label="Site navigation"
      className="mx-auto max-w-6xl px-md sm:px-lg"
    >
      <ul className="m-0 flex list-none flex-wrap items-center gap-3xs px-0 py-xs sm:gap-xs">
        {pages.map(({ to, label }) => (
          <li key={to}>
            <Intent to={to}>{label}</Intent>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
