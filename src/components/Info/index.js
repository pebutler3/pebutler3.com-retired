import React from 'react';

import './index.css';

const Info = ({...props}) => {
  return (
    <section className="info-box">
      <h2>[ {props.title} ]</h2>
      <p>{props.position} @ {props.company}</p>
      <ul className="tools-list">
       <p>Currently deploying.</p>
       <li>Angular 5+</li>
       <li>React & React Native</li>
       <li>Vue</li>
       <li>Ionic</li>
      </ul>
    </section>
  );
}

export default Info;
