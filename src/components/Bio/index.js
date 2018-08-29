import React from 'react';

import './index.css';
import ribbon from './ribbon.svg';

const Bio = ({...props}) => {
  return (
    <section className="info-box">
      <h2>[ {props.title} ]</h2>
      <p>I am a self-taught front-end developer from Ohio.</p>
      <p>Father of 2 girls with a hot lady to tie it all together.</p>
      <div className="leukemia-section">
        <img src={ribbon} alt="Leukemia ribbon" />
        <span>Leukemia survivor.</span>
      </div>
      <p><span>Location:</span> {props.location}, Colorado</p>
      <p>Public Repos: {props.repos}</p>
    </section>
  );
}

export default Bio;
