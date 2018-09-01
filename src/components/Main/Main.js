import React, { Component } from 'react';

import './Main.css';

import InfoContainer from '../../containers/InfoContainer/index';

class Main extends Component {
  render() {
    return (
      <main>
        <InfoContainer {...this.props.children}/>
      </main>
    );
  }
}

export default Main;
