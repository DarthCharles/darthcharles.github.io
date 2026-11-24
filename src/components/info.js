import React from 'react';

import { Button } from '@darthcharles/greda';
import { ArrowRight, Github, Linkedin, Mail } from '@darthcharles/greda/icons';

import { Link } from 'gatsby';

import { trackAnalyticsEvent } from '../analytics';

const contacts = [
  {
    href: 'mailto:ccontreras.eng@gmail.com',
    label: 'Email',
    Icon: Mail,
    analyticsEvent: 'contact_email_click',
  },
  {
    href: 'https://www.linkedin.com/in/ccontreras-hernandez/',
    label: 'LinkedIn',
    Icon: Linkedin,
    analyticsEvent: 'contact_linkedin_click',
  },
  {
    href: 'https://github.com/DarthCharles',
    label: 'GitHub',
    Icon: Github,
    analyticsEvent: 'github_profile_click',
  },
];

const syntaxClassName = 'block font-code text-lg';

export const Info = () => (
  <main className="mx-auto max-w-6xl px-md py-2xl sm:px-lg md:py-3xl">
    <code aria-hidden="true" className={`${syntaxClassName} text-action`}>
      <span className="text-syntax-keyword">def</span> about
    </code>

    <div className="my-sm border-s border-primary py-lg ps-md sm:py-xl sm:ps-xl">
      <h1 className="text-display">
        Carlos <span className="text-syntax-type">Contreras</span>
      </h1>
      <p className="mt-sm text-title">Senior Software Engineer</p>
      <p className="mt-lg max-w-[65ch] text-body">
        I’m a Senior Software Engineer with 10+ years of experience building
        complex web applications. I work across the stack to keep systems
        maintainable and help teams ship reliably.
      </p>

      <div className="mt-lg flex flex-col items-start gap-xs sm:flex-row sm:flex-wrap sm:items-center">
        <Button asChild size="lg" className="min-h-[44px] border-0">
          <Link to="/resume">
            View résumé <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <div className="flex flex-wrap gap-3xs">
          {contacts.map(({ href, label, Icon, analyticsEvent }) => (
            <Button
              key={href}
              asChild
              variant="ghost"
              className="min-h-[44px] border-0 px-xs sm:px-sm"
            >
              <a
                href={href}
                onClick={() => trackAnalyticsEvent(analyticsEvent)}
              >
                <Icon aria-hidden="true" /> {label}
              </a>
            </Button>
          ))}
        </div>
      </div>

      <p className="mt-lg text-body text-secondary">
        I like playing video games, walking the dog, and cooking.
      </p>
    </div>

    <code
      aria-hidden="true"
      className={`${syntaxClassName} text-syntax-keyword`}
    >
      end
    </code>
  </main>
);
