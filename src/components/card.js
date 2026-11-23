import React from 'react';

import * as styles from './card.module.css';

export const CardGrid = ({ children }) => (
  <ul className={styles.grid} role="list">
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
  <li className={styles.card}>
    <img
      className={styles.preview}
      src={require(`../images/${image}`).default}
      alt=""
      width="1200"
      height="630"
    />
    <div className={styles.details}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={styles.links}>
        <a
          href={link}
          aria-label={`${linkLabel} for ${title}`}
          target={openInNewTab ? '_blank' : undefined}
          rel={openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {linkLabel}
        </a>
        {source && (
          <a href={source} aria-label={`View source for ${title}`}>
            View source
          </a>
        )}
      </div>
    </div>
  </li>
);
