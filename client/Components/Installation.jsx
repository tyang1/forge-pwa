import React from 'react';
import "../animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Installation = () => (
  <div className="container-fluid">
  <ScrollAnimation animateIn="fadeInLeft">
    <div className="row heading">
      <h3>Installation And Usage</h3>
    </div>
    <div className="row">
      <div className="col-md-3">
        <h3>Installation</h3>
        <p>Install the Forge with npm:</p>
        <div className="highlight shell">
          <pre className="editor editor-colors">
            <span className="source shell">npm install forge -g</span>
          </pre>
        </div>
      </div>
      <div className="col-md-3">
        <h3>Basic Usage</h3>
        <p>Run the Forge in the command line:</p>
        <div className="highlight shell">
          <pre className="editor editor-colors">
            <span className="source shell">forge</span>
          </pre>
        </div>
        <p>Display the help prompt:</p>
        <div className="highlight shell">
          <pre className="editor editor-colors">
            <span className="source shell">forge -h</span><br />
            <span className="source shell">forge --help</span>
          </pre>
        </div>
        <p>Initializing an existing project:</p>
        <div className="highlight shell">
          <pre className="editor editor-colors">
            <span className="source shell">forge -i</span><br />
            <span className="source shell">forge --init</span>
          </pre>
        </div>
        <p>Redeploying a forged project:</p>
        <div className="highlight shell">
          <pre className="editor editor-colors">
            <span className="source shell">forge -r</span><br />
            <span className="source shell">forge --redeploy</span>
          </pre>
        </div>
        <p>Logging out of AWS and Firebase in the Forge:</p>
        <div className="highlight shell">
          <pre className="editor editor-colors">
            <span className="source shell">forge -o</span><br />
            <span className="source shell">forge --logout</span>
          </pre>
        </div>
      </div>
      <div className="col-md-6">
        <img class="half-image" src='https://i.imgur.com/Bch4gAK.png' width='600' alt='forge' />
      </div>
    </div>
    </ScrollAnimation>
  </div>
);

export default Installation;
