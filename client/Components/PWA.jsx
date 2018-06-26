import React from "react";
import Info from "./Info.jsx";

const PWA = props => (
  <div className="info">
    <img
      className="image"
      src={props.img}
      alt={props.name}
    />
    <p font-size="40px">{props.name}</p>
    <Info
      description={props.description}
      bkground={props.bkground}
      github={props.github}
      linked={props.linked}
    />
  </div>
);

export default PWA;
