import React from 'react';
import '../animate.css/animate.min.css';
import iconImg from '../static/forge-icon.png';

const Logo = () => (
  <div className="container-fluid banner logo-container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h1 className="forge-header">the Forge</h1>
        <h4><em>Where code is smithed.</em><br /></h4>
        <h5>The Forge is a command line interface tool for generating and hosting Progressive Web Apps.</h5>
        <h5>Quickly generate and deploy the codebase of a PWA through Firebase and AWS to get started on creating web apps that behave just like any mobile app.</h5>
        <div className="banner-buttons">
          <a className="btn btn-lg btn-success" href="https://github.com/forgepwa/the_forge/">Github</a>
          <a className="btn btn-lg btn-info" href="https://www.npmjs.com/package/the_forge">NPM</a>
        </div>
        <div className="github-button-group">
          <div className="gh-btn"><a className="github-button" href="https://github.com/forgepwa/the_forge" data-icon="octicon-star" aria-label="Star the Forge on GitHub">Star</a></div>
          <div className="gh-btn"><a className="github-button" href="https://github.com/forgepwa" aria-label="Follow @forgepwa on GitHub">Follow @forgepwa</a></div>
        </div>
      </div>
      <div className="col-md-6">
        <img className="icon-img" src={iconImg} alt="the Forge icon" />
      </div>
    </div>
  </div>
);

export default Logo;
