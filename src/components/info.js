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
      <div className="h1 code mt-5 mb-3">
        <span style={{ color: '#CC7832' }}>
          def {<span style={{ color: '#FFC66D' }}>about</span>}
        </span>
      </div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <span role="img" aria-label="wink emoji">
          👋
        </span>{' '}
        I’m a Software engineer committed to deliver high quality and performant
        solutions. I'm always eager learn something new and constantly looking for
        new skills to add to my stack.
        <p className="mt-3">I like chess, walking the dog and cooking.</p>
        <p className="mt-3">
          Send me a message, I've got candy.{' '}
          <span role="img" aria-label="wink emoji">
            😉
          </span>
        </p>
      </div>
      <div className="h1 code mt-2 mb-3" style={{ color: '#CC7832' }}>
        {'end'}
      </div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="mailto://carlos.darth@gmail.com">
          <Mail />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/carlos-contreras-hernandez/"
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
