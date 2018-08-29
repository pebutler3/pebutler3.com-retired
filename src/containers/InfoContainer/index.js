import React, { Component } from 'react';
import axios from 'axios';

import './index.css';

import Info from '../../components/Info';
import Bio from '../../components/Bio';

class InfoContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.search();
  }

  render() {
    const location = this.state.location;
    const repos = this.state.repos;
    const company = this.state.company

    return (
      <div className="info-box__wrapper">
        <Info title="Info" position="Front-End Developer" company={company}/>
        <Bio
           title="About Me"
           repos={repos}
           location={location}
        />
      </div>
    );
  }

  search(query = "pebutler3") {
    let url = `https://api.github.com/users/${query}`;
    axios.get(url).then((response) => {
      console.log(response);
      this.setState({
        repos: response.data.public_repos,
        location: response.data.location,
        name: response.data.name,
        avatar: response.data.avatar_url,
        company: response.data.company
      });
    });
  }
}

export default InfoContainer;
