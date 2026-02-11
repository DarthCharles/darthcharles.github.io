import React from 'react';

import {
  FaGithub as Github,
  FaLinkedin as LinkedIn,
  FaEnvelope as Mail,
} from 'react-icons/fa';

export const Info = () => {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: '#8e44ad' }}>
        <span style={{ color: 'white' }}>Hello, I'm </span>
        Carlos.
      </div>
      <p className="h4 text-muted mt-2">Senior Software Engineer</p>
      <div className="h1 code mt-5 mb-3">
        <span style={{ color: '#CC7832' }}>
          def {<span style={{ color: '#FFC66D' }}>about</span>}
        </span>
      </div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <span role="img" aria-label="wave emoji">
          👋
        </span>{' '}
        Senior Software Engineer with 10+ years of experience building and
        evolving complex web applications. I focus on delivering scalable,
        maintainable solutions that balance product needs with strong engineering
        fundamentals. I care about system quality, long-term sustainability, and
        helping teams ship reliably at scale.
        <p className="mt-3">I like chess, walking the dog, and cooking.</p>
      </div>
      <div className="h1 code mt-2 mb-3" style={{ color: '#CC7832' }}>
        {'end'}
      </div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="mailto:ccontreras.eng@gmail.com">
          <Mail />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/ccontreras-hernandez/"
        >
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="https://github.com/DarthCharles">
          <Github />
        </a>
      </div>
    </div>
  );
};
