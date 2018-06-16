import React from 'react';
import Navbar from './NavBar.jsx';
import Team from '../Team.jsx';
import '../styles.scss';

const App = () =>
  (
    <div>
      <div id="app-container" />
      <Navbar />
      <Team />
    </div>
  );

// import React, { Component } from "react";
// import Team from '../Team.jsx';
// import "../styles.scss";
// import { Navbar } from './NavBar.jsx';

// class App extends Component {
//   render() {
//     return (
//       <div id="app-container">
//         <Navbar />
//         <Team />
//       </div>
//     );
//   }
// }

export default App;
