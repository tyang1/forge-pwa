import React from "react";

const Info = props => (
  <div className = "team-hover">
    <div className="head">
      <p>{props.description}</p>
      <a href={props.github}> <i className="fab fa-github fa-2x" />
      </a>
      <a href={props.linked}><i class="fab fa-linkedin fa-2x"></i></a> 
    </div>
  </div>
);

export default Info;
