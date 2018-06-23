import React, { Component } from 'react';
import Navbar from './NavBar.jsx';
import Team from './Team.jsx';
import Logo from './Logo.jsx';
import Features from './Features.jsx';
import Installation from './Installation.jsx';
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
        <Logo />
        <Features />
        <Installation />
        <Team />
      </div>
    );
  }
}

export default App;
