import React, { Component } from "react";
import Team from './Team.jsx';
import "./styles.scss";


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Team />
      </div>
    );
  }
}

export default App;
