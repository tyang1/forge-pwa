import React from "react";

const Info = props => (
  <div className = "team-hover">
    <div className="head">
      <h2>{props.bkground}</h2>
      <a href={props.github}> <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100"/>
      </a> 
    </div>
  </div>
);

export default Info;
