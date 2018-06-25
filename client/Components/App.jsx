import React, { Component } from 'react';
import Navbar from './NavBar.jsx';
import Logo from './Logo.jsx';
import Features from './Features.jsx';
import Installation from './Installation.jsx';
import Team from './Team.jsx';
import Footer from './Footer.jsx';
import '../styles.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="app-container">
      <link rel="stylesheet" href="/bower_components/lato-font/css/lato-font.css"/>
        <Navbar />
        <Logo />
        <Features />
        <Installation />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;
