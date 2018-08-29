import React from 'react';

import './Nav.css';
import Resume from '../Resume/current.pdf';


const toggleContactContainer = () => {
  const contactContainer = document.querySelector('.contact-container');
  contactContainer.classList.toggle('contact-container--visible');
}

const Nav = ({...props}) => {

  return (
    <nav>
      <ul className="nav__list">
        <li>
          <a href={Resume}>Résumé</a>
        </li>
        <li>
          <button onClick={toggleContactContainer}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
