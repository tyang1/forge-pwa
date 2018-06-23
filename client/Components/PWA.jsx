import React from "react";
import Info from "./Info.jsx";

const PWA = props => (
  <div className="info">
    <img className="image" src={props.img} height={200} width={170} alt="" />
    <p> {props.name}</p>
    <p>{props.description}</p>
    <Info bkground={props.bkground} github={props.github}/>
    
  </div>
);

export default PWA;
