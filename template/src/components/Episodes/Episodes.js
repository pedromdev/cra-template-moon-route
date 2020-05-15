import React from 'react';
import './Episodes.css';

const Episodes = ({children}) => {
  return (
    <section className="episodes">
      <div className="eps-crawl">
        {children}
      </div>
    </section>
  );
};

export default Episodes;
