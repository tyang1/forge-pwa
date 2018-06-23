import React from "react";

const Info = props => (
  <div className = "team-hover">
    <div className="head">
      <h2>{props.bkground}</h2>
      <a href={props.github}> <img border="0" src={props.github} width="50" height="50"/>
      </a> 
    </div>
  </div>
);

export default Info;
