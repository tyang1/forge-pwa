import React from 'react';

const Features = () => (
  <div className="container-fluid">
    <div className="row text-center heading">
      <h3>Features</h3>
    </div>
    <div className="row">
      <div className="col-md-6">
        <p>TODO: ADD GIF</p>
      </div>
      <div className="col-md-6">
        <i className="fa fa-check fa-2x circled bg-skin float-left" />
        <h4>Generate PWA Codebase</h4>
        <p>Quickly generate a new directory that contains all the code you need to get up and running with a Progressive Web App.</p>
        <i className="fa fa-check fa-2x circled bg-skin float-left" />
        <h4>Host to a Firebase Account</h4>
        <p>Deploy your forged Progressive Web App with a Google Firebase account.</p>
        <i className="fa fa-check fa-2x circled bg-skin float-left" />
        <h4>Host to your AWS Account</h4>
        <p>Automatically spins up an AWS EC2 instance and hosts your forged project in a S3 bucket.</p>
      </div>
    </div>
  </div>
);

export default Features;
