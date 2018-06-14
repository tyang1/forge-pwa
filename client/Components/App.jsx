<<<<<<< HEAD:client/App.jsx
import React, { Component } from "react";
import Team from './Team.jsx';
import "./styles.scss";

=======
import React, { Component } from 'react';
import { Navbar } from './NavBar.jsx';
>>>>>>> a17b62f8ac1a11ce260e88d3076cb3f5f7cbd1da:client/Components/App.jsx

class App extends Component {
  render() {
    return (
      <div id="app-container">
<<<<<<< HEAD:client/App.jsx
        <Team />
=======
        <Navbar brand="The Forge" />
        <p>hello</p> World
>>>>>>> a17b62f8ac1a11ce260e88d3076cb3f5f7cbd1da:client/Components/App.jsx
      </div>
    );
  }
}

export default App;
