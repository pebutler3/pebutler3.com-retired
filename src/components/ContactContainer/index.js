import React from 'react';

import './index.css';

const ContactContainer = () => {
  const email = 'mailto:p.e.butler3@gmail.com';
  const github = 'https://github.com/pebutler3';
  const linkedIn = 'https://www.linkedin.com/in/pebutler3/';

  return (
    <div className="overlay">
      <div className="contact-container">
        <div className="contact-container__inner">
          <ul className="contact-container__list">
            <li><a href={email}>Email</a></li>
            <li><a href={github}>Github</a></li>
            <li><a href={linkedIn}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
