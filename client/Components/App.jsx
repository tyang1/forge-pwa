import React, { Component } from 'react';
import Navbar from './NavBar.jsx';
import Team from './Team.jsx';
import '../styles.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="app-container">
        <Navbar />
        <Team />
      </div>
    );
  }
}

export default App;
