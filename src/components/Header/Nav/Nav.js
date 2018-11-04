import React from 'react';

import './Nav.css';
import resume from './current.pdf';


const toggleContactContainer = (e) => {
  const contactContainer = document.querySelector('.contact-container');
  const overlay = document.querySelector('.overlay');

  contactContainer.classList.toggle('contact-container--visible');
  overlay.classList.toggle('overlay--open');

  overlay.addEventListener('click', toggleContactContainer)
}

const Nav = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li>
          <a href={resume}>Résumé</a>
        </li>
        <li>
          <button onClick={toggleContactContainer}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
