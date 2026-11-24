import React from 'react';

import karma from '../images/karma.png';
import comal from '../images/project-comal.webp';
import greda from '../images/project-greda.webp';
import portfolio from '../images/project-portfolio.webp';
import productosDogar from '../images/project-productos-dogar.webp';
import translations from '../images/translations.gif';

const cardImages = new Map([
  ['karma.png', karma],
  ['project-comal.webp', comal],
  ['project-greda.webp', greda],
  ['project-portfolio.webp', portfolio],
  ['project-productos-dogar.webp', productosDogar],
  ['translations.gif', translations],
]);

const linkClassName =
  'inline-flex min-h-xl items-center text-[0.875rem] text-action underline underline-offset-[0.2em] hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-[3px]';

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
}) => {
  const imageSrc = cardImages.get(image);
  if (!imageSrc)
    throw new Error(`Missing card image "${image}" for "${title}"`);

  return (
    <li className="flex flex-col overflow-hidden rounded-lg surface-raised">
      <img
        className="block aspect-[1200/630] h-auto w-full object-cover"
        src={imageSrc}
        alt=""
        width="1200"
        height="630"
      />
      <div className="flex flex-1 flex-col p-[1.25rem]">
        <h2 className="mb-xs text-[1.375rem] leading-[1.2] font-medium">
          {title}
        </h2>
        <p className="mb-md text-[1rem] leading-[1.6] text-secondary">
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
};
