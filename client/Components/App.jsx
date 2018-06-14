import React, { Component } from "react";
import Team from '../Team.jsx';
import "../styles.scss";
import { Navbar } from './NavBar.jsx';


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar brand="The Forge" />
        <Team />
    
      </div>
    );
  }
}

export default App;
