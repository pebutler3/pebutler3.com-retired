import React from 'react';

const Info = ({...props}) => {
  return (
    <section className="info-box">
      <h2>[ {props.title} ]</h2>
      <p>{props.position} @ {props.company}</p>
      <p>Currently deploying React, Angular 2, and AEM.</p>
    </section>
  );
}

export default Info;