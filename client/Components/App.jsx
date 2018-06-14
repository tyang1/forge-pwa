import React, { Component } from 'react';
import Navbar from './NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="app-container">
          <p>hello</p> World
        </div>
      </div>
    );
  }
}

export default App;
