import React from "react";
import "../animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Info = props => (
  <div className = "team-hover">
    <div className="head">
      <p>{props.description}</p>
      <a href={props.github}> <i className="fab fa-github fa-1x" />
      </a>
      <a href={props.linked}><i class="fab fa-linkedin fa-1x"></i></a> 
    </div>
  </div>
);

export default Info;
