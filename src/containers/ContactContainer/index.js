import React, { Component } from 'react';

import './index.css';

class ContactContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="contact-container">
        <div className="contact-container__inner">
          <ul className="contact-container__list">
            <li><a href="#0">Email</a></li>
            <li><a href="#1">Github</a></li>
            <li><a href="#2">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactContainer;
