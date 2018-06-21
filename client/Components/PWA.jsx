import React from 'react';

const PWA = props => (
  <div className="info">
      <img src={props.img} height={200} width={170} alt="" />
      <p> {props.description}</p>
      <div className="description">
        <h4>Coding is fun!</h4>
        <p>Experiences and dream</p>
      </div>
  </div>
);

export default PWA;
