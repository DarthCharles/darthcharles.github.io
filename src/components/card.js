import React from 'react';

const linkClassName =
  'inline-flex min-h-xl items-center text-[0.875rem] text-action underline underline-offset-[0.2em] hover:text-[color:hsl(var(--primary-hover))] focus-visible:outline-2 focus-visible:outline-offset-[3px]';

export const CardGrid = ({ children }) => (
  <ul
    className="m-0 grid list-none grid-cols-1 gap-lg p-0 md:grid-cols-2"
    role="list"
  >
    {children}
  </ul>
);

export const Card = ({
  title,
  subtitle,
  image,
  link,
  linkLabel,
  source,
  openInNewTab = false,
}) => (
  <li className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] surface-raised">
    <img
      className="block aspect-[1200/630] h-auto w-full object-cover"
      src={require(`../images/${image}`).default}
      alt=""
      width="1200"
      height="630"
    />
    <div className="flex flex-1 flex-col p-[1.25rem]">
      <h2 className="mb-xs text-[1.375rem] leading-[1.2] font-medium">
        {title}
      </h2>
      <p className="mb-md text-[1rem] leading-[1.6] text-[color:hsl(var(--text-secondary))]">
        {subtitle}
      </p>
      <div className="mt-auto flex flex-wrap gap-x-[1.25rem] gap-y-xs">
        <a
          className={linkClassName}
          href={link}
          aria-label={`${linkLabel} for ${title}`}
          target={openInNewTab ? '_blank' : undefined}
          rel={openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {linkLabel}
        </a>
        {source && (
          <a
            className={linkClassName}
            href={source}
            aria-label={`View source for ${title}`}
          >
            View source
          </a>
        )}
      </div>
    </div>
  </li>
);
