import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer__wrapper">
                    <h2>This is the footer!</h2>
                </div>
                <div className="banner">
                  <div className="banner--left">
                    <h1>1Front-End Developer</h1>
                  </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
