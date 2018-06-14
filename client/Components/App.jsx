import React, { Component } from 'react';
import { Navbar } from './NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar brand="The Forge" />
        <p>hello</p> World
      </div>
    );
  }
}

export default App;
