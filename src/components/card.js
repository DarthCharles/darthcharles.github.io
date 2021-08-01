import React from 'react';

export const Card = (props) => {
  const { cardTitle, cardSubtitle, cardImage, link } = props;
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5">
        <div className="card-body">
          <img src={cardImage} alt="cover" />
          <h3 className="card-title mt-3">{cardTitle}</h3>
          <p className="card-text">{cardSubtitle}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            See
          </a>
        </div>
      </div>
    </div>
  );
};
