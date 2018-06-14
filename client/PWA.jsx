import React, { Component } from "react";

const Pwa = props => (
  <div className="member">
    <div className="mem-img">
      <img src={props.img} height={200} width={170} />
      <p> {props.description}</p>
    </div>
    <div className="mem-hover">
        <div className="description">
        <h4>"Coding is fun!"</h4>
        <p>"Experiences and dream"</p>
        </div>
    </div>
  </div>
);

export default Pwa;
