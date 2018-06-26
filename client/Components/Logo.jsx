import React from 'react';
import "../animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import logoImg from '../static/forge_header.jpg';

const Logo = () => (
  <div className="logo-container">
    <img className="logo-text" src={logoImg} alt="the Forge"/>
    <div className="buttons float-right">
      <a href="https://github.com/ProgrammersWitAttitudes/pwa_creator" className="btn btn-success btn-lg">GITHUB</a>
      <a href="https://npmjs.com/package/the_forge" className="btn btn-info btn-lg">NPM</a>
    </div>
  </div>
);

export default Logo;
