import React from 'react';

import { Button } from '@darthcharles/greda';
import { ArrowRight, Github, Linkedin, Mail } from '@darthcharles/greda/icons';

import { Link } from 'gatsby';

const contacts = [
  { href: 'mailto:ccontreras.eng@gmail.com', label: 'Email', Icon: Mail },
  {
    href: 'https://www.linkedin.com/in/ccontreras-hernandez/',
    label: 'LinkedIn',
    Icon: Linkedin,
  },
  { href: 'https://github.com/DarthCharles', label: 'GitHub', Icon: Github },
];

export const Info = () => (
  <main className="mx-auto max-w-6xl px-md py-3xl sm:px-lg md:py-[5.5rem]">
    <div className="max-w-[68ch]">
      <h1 className="mb-xs text-display text-balance">
        Hello, I’m{' '}
        <span className="text-[color:hsl(var(--workbench-syntax-type))]">
          Carlos.
        </span>
      </h1>
      <p className="mb-0 text-title text-[color:hsl(var(--text-secondary))]">
        Senior Software Engineer
      </p>

      <section aria-labelledby="about-heading" className="mt-2xl md:mt-3xl">
        <h2 id="about-heading" className="mb-sm text-title">
          <code className="font-code text-action">
            <span
              aria-hidden="true"
              className="text-[color:hsl(var(--workbench-syntax-keyword))]"
            >
              def{' '}
            </span>
            about
          </code>
        </h2>
        <div className="max-w-[68ch] text-body! text-[color:hsl(var(--text-secondary))]">
          <p className="mb-md">
            Senior Software Engineer with 10+ years of experience building and
            evolving complex web applications. I focus on delivering scalable,
            maintainable solutions that balance product needs with strong
            engineering fundamentals. I care about system quality, long-term
            sustainability, and helping teams ship reliably at scale.
          </p>
          <p className="mb-0">I like chess, walking the dog, and cooking.</p>
        </div>
      </section>

      <div className="mt-xl flex flex-col items-start gap-xs sm:flex-row sm:flex-wrap sm:items-center">
        <Button
          asChild
          size="lg"
          className="border-0 bg-[color:hsl(var(--primary))] no-underline hover:bg-primary-hover"
        >
          <Link to="/resume">
            View résumé <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <div className="flex flex-wrap items-center gap-3xs">
          {contacts.map(({ href, label, Icon }) => (
            <Button
              key={href}
              asChild
              variant="ghost"
              className="min-h-[44px] border-0 px-sm text-[color:hsl(var(--text-secondary))] no-underline"
            >
              <a href={href}>
                <Icon aria-hidden="true" /> {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  </main>
);
