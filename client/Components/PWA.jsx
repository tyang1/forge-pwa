import React from "react";
import Info from "./Info.jsx";

const PWA = props => (
  <div className="info">
    <img src={props.img} height={200} width={170} alt="" />
    <p> {props.description}</p>
    <Info />
    <div className="description">
      <p>Experiences and dream</p>
    </div>
  </div>
);

export default PWA;
