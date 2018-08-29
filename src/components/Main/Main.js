import React, { Component } from 'react';

import './Main.css';
import me from './me.jpg';

import InfoContainer from '../../containers/InfoContainer/index';

class Main extends Component {
  render() {
    return (
      <main>
        <InfoContainer {...this.props.children}/>
        <img className="avatar" src={me} alt="P.E. Butler III" />
      </main>
    );
  }
}

export default Main;
