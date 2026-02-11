import React from 'react';

import { Layout } from '../components/Layout';

import '../style.css';

const experience = [
  {
    company: 'HIMS AND HERS HEALTH, INC',
    role: 'Senior Software Engineer',
    period: '2019 - Current',
    bullets: [
      'Led high-impact frontend and platform initiatives for a large-scale EMR system, enabling the launch of numerous treatment verticals and supporting the company\'s expansion into lab-based and longitudinal care.',
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
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Frontend Architecture',
  'Server-Side Rendering',
  'REST APIs',
  'State Management',
  'Web Performance',
  'Bundle Optimization',
  'Build Optimization',
  'CI/CD',
  'Docker',
  'GitHub Actions',
  'Jest',
  'Cypress',
];

function Resume() {
  return (
    <Layout title="Resume">
      <div className="container">
        <div className="my-5" />

        {/* Experience */}
        <div className="h1 code mb-3" style={{ color: '#CC7832' }}>
          <span style={{ color: '#FFC66D' }}>experience</span>
          <span style={{ color: '#CC7832' }}>.</span>
        </div>
        {experience.map((job, i) => (
          <div key={i} className="mb-5">
            <h2 className="h4 mb-1" style={{ color: '#8e44ad' }}>
              {job.company}
            </h2>
            <p className="text-muted mb-2" style={{ fontSize: '0.95rem' }}>
              {job.role} | {job.period}
            </p>
            <ul className="text-muted pl-4" style={{ lineHeight: 1.6 }}>
              {job.bullets.map((bullet, j) => (
                <li key={j} className="mb-2">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Education */}
        <div className="h1 code mt-5 mb-3" style={{ color: '#CC7832' }}>
          <span style={{ color: '#FFC66D' }}>education</span>
          <span style={{ color: '#CC7832' }}>.</span>
        </div>
        <div className="mb-5">
          <h2 className="h4 mb-1" style={{ color: '#8e44ad' }}>
            {education.school}
          </h2>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            {education.degree} | {education.period}
          </p>
        </div>

        {/* Skills */}
        <div className="h1 code mt-5 mb-3" style={{ color: '#CC7832' }}>
          <span style={{ color: '#FFC66D' }}>skills</span>
          <span style={{ color: '#CC7832' }}>.</span>
        </div>
        <div className="d-flex flex-wrap mb-5">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="mr-2 mb-2 px-3 py-1"
              style={{
                backgroundColor: '#324359',
                borderRadius: '4px',
                fontSize: '0.9rem',
                color: '#ccc',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
