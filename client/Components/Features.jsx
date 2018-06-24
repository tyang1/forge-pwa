import React from 'react';
import "../animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => (
  <div className="container-fluid features">
  <ScrollAnimation animateIn = "fadeInLeft">
    <div className="row heading">
      <h3>Features</h3>
    </div>
    <div className="row">
      <div className="col-md-6">
        <p>TODO: ADD GIF</p>
      </div>
      <div className="col-md-6">
        <i className="fas fa-bolt fa-2x float-left bolts" />
        <h4>&nbsp;Generate PWA Codebase</h4>
        <p>Quickly generate a new directory that contains all the code you need to get up and running with a Progressive Web App.</p>
        <i className="fas fa-bolt fa-2x float-left bolts" />
        <h4>&nbsp;Host to a Firebase Account</h4>
        <p>Deploy your forged Progressive Web App with a Google Firebase account.</p>
        <i className="fas fa-bolt fa-2x float-left bolts" />
        <h4>&nbsp;Host to your AWS Account</h4>
        <p>Automatically spins up an AWS EC2 instance and hosts your forged project in a S3 bucket.</p>
      </div>
    </div>
    </ScrollAnimation>
  </div>
);

export default Features;
