import React from 'react';

import './index.css';
import me from './me.jpg';
import ribbon from './ribbon.svg';

const publicReposUrl = 'https://github.com/pebutler3?tab=repositories';

const Bio = ({...props}) => {
  return (
    <section className="info-box info-box--bio">
      <h2>[ {props.title} ]</h2>
      <p>I am a self-taught front-end developer from Ohio.</p>
      <p>Father of 2 girls with a hot lady to tie it all together.</p>
      <div className="leukemia-section">
        <img src={ribbon} alt="Leukemia ribbon" />
        <span>Leukemia survivor.</span>
      </div>
      <p><span>Location:</span> {props.location}, Colorado</p>
      <p><span>Public Repos:</span> <a href={publicReposUrl}>{props.repos}</a></p>
      <div className="avatar__wrapper">
        <img className="avatar" src={me} alt="P.E. Butler III"/>
      </div>
    </section>
  );
}

export default Bio;
