import React from 'react';
import './Episode.css';

const Episode = ({title, openingCrawl}) => {
  return (
    <div className="episode">
      <p className="ep-title">{title}</p>
      <p className="ep-opening-crawl">{openingCrawl}</p>
    </div>
  );
};

export default Episode;
