import React, { Component } from 'react';

import './Header.css';

import Nav from './Nav/Nav.js';
import logo from './Logo/hammer-pickaxe.svg'


class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__wrapper">
          <div className="logo__wrapper">
            <img src={logo} className="logo" alt="Hammer and pickaxe"/>
            <h1 className="nav__header-name">P.E. Butler III • <span className="nav__header-title">Front-End Developer</span></h1>
          </div>
          <Nav></Nav>
        </div>
      </header>
    );
  }
}

export default Header;
