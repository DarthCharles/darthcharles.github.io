import React from 'react';

import { Badge } from '@darthcharles/greda';

import { Layout, PageTitle } from '../components/Layout';

const experience = [
  {
    company: 'HIMS AND HERS HEALTH, INC',
    role: 'Senior Software Engineer',
    period: '2019 - Current',
    bullets: [
      "Led high-impact frontend and platform initiatives for a large-scale EMR system, enabling the launch of numerous treatment verticals and supporting the company's expansion into lab-based and longitudinal care.",
      'Collaborated cross-functionally to expand the platform to all 50 U.S. states, enabling phone and video consultations, primary care, and mental health services on a regulated healthcare platform.',
      'Built the Biomarker Admin Tool, empowering clinical teams to manage lab biomarker configurations without engineering support, eliminating operational bottlenecks and accelerating lab-based treatment iteration.',
      'Architected and led the migration to Next.js, modernizing the frontend stack, improving performance, security, and long-term maintainability while reducing technical debt across legacy EMR UI.',
      'Drove significant performance and CI/CD improvements, including an 87% reduction in Docker image size, 50% faster E2E tests, and 35% faster TypeScript builds, resulting in faster deployments and more reliable release cycles.',
    ],
  },
  {
    company: 'POINTS (A PLUSGRADE COMPANY)',
    role: 'Full-Stack Engineer (contracted via Encora)',
    period: 'Nov 2015 - Sep 2019',
    bullets: [
      'Contributed to the design and development of a multi-tenant, white-label travel and loyalty platform used by global loyalty programs, enabling scalable customization across multiple brands and clients.',
      'Built and evolved full-stack features using Ruby on Rails APIs and React, delivering flexible, brand-consistent user experiences while supporting accessibility and GDPR-compliant data privacy requirements.',
      'Designed and implemented a Translation Management Tool that reduced internationalization effort by ~90%, significantly accelerating localization and international market launches.',
      'Developed the Miles Accelerator feature, directly contributing to a 5% increase in gross margin by increasing customer engagement within loyalty programs.',
    ],
  },
];

const education = {
  school: 'UNIVERSIDAD DE SONORA',
  degree: 'B.S. Information Systems Engineering',
  period: '2011 - 2016',
};

const skills = [
  'Frontend Architecture',
  'Design Systems',
  'REST APIs',
  'CI/CD',
  'Build Optimization',
  'Web Performance',
  'TypeScript',
  'React',
  'Next.js',
  'Ruby on Rails',
  'Tailwind CSS',
  'Docker',
  'GitHub Actions',
  'Jest',
  'Cypress',
  'AI-Assisted Development',
  'OpenAI Codex',
  'Claude Code',
];

const entryTitleClass = 'mb-2xs text-title text-syntax-type';

const ResumeSection = ({ title, children }) => (
  <section aria-labelledby={`resume-${title}`}>
    <h2
      id={`resume-${title}`}
      className="mb-md font-code text-title text-action"
    >
      {title}
      <span aria-hidden="true" className="text-syntax-keyword">
        .
      </span>
    </h2>
    {children}
  </section>
);

function Resume() {
  return (
    <Layout>
      <main className="mx-auto max-w-[71.25rem] px-md py-2xl">
        <div className="max-w-[48rem]">
          <h1 className="mb-lg font-code text-[2.5rem] leading-tight font-medium text-action">
            Résumé
            <span className="text-syntax-keyword">.</span>
          </h1>
          <div className="flex flex-col gap-xl text-body text-primary">
            <p className="max-w-[65ch]">
              Senior Software Engineer with 10+ years of experience building and
              evolving complex web applications. I focus on delivering scalable,
              maintainable solutions that balance product needs with strong
              engineering fundamentals. I care about system quality, long-term
              sustainability, and helping teams ship reliably at scale.
            </p>
            <ResumeSection title="experience">
              <div className="flex flex-col gap-lg">
                {experience.map((job) => (
                  <div key={job.company}>
                    <h3 className={entryTitleClass}>{job.company}</h3>
                    <p className="mb-sm text-caption text-secondary">
                      {job.role} | {job.period}
                    </p>
                    <ul className="m-0 list-disc space-y-xs ps-lg">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="education">
              <h3 className={entryTitleClass}>{education.school}</h3>
              <p className="mb-0 text-caption text-secondary">
                {education.degree} | {education.period}
              </p>
            </ResumeSection>

            <ResumeSection title="skills">
              <ul
                className="m-0 flex list-none flex-wrap gap-xs p-0"
                role="list"
              >
                {skills.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="secondary"
                      className="border-0 surface-secondary text-primary"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </ResumeSection>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Resume;

export const Head = () => <PageTitle title="Resume" />;
