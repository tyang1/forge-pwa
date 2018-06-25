import React from "react";
import Info from "./Info.jsx";

const PWA = props => (
  <div className="info">
    <img
      className="image"
      src={props.img}
      // height={200}
      // width={170}
      alt={props.name}
    />
    <p font-size="40px"> {props.name}</p>
    <p>{props.description}</p>
    <Info
      bkground={props.bkground}
      github={props.github}
      linked={props.linked}
    />
  </div>
);

export default PWA;
