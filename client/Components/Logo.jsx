import React from 'react';
import "../animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Logo = () => (
  <div className="logo-container">
  <ScrollAnimation animateIn="fadeInDown">
    <h1 className="logo-text">the Forge</h1>
    <h3 className="slogan">Where code is smithed.</h3>
    <div className="buttons float-right">
      <a href="https://github.com/ProgrammersWitAttitudes/pwa_creator" className="btn btn-success btn-lg">GITHUB</a>
      <a href="https://npmjs.com/package/the_forge" className="btn btn-info btn-lg">NPM</a>
    </div>
    </ScrollAnimation>
  </div>
);

export default Logo;
