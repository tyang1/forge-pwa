import React from "react";
import PWA from "./PWA.jsx";
import chris from "../static/Chris.jpg";
import jeff from "../static/Jeff.jpg";
import kyle from "../static/Kyle.jpg";
import tiff from "../static/Tiffany.jpg";
import "../animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Team = props => (
  <div className="container-fluid team">
    <ScrollAnimation duration="1" delay="200" animateOnce="true" animateIn="fadeIn">
      <div className="heading">
        <h3>Our Team</h3>
      </div>
      <div className="column">
        <PWA
          img={chris}
          name="Christopher Washburn"
          description="-&quot;Passionate about React/Redux&quot;"
          bkground="background"
          linked="https://www.linkedin.com/in/christopherwashburn/"
          github="https://github.com/SKChristopher"
        />
      </div>
      <div className="column">
        <PWA
          img={kyle}
          name="Kyle Loftin"
          description="-&quot;Love all things tech!&quot;"
          bkground="ready to take on new tech"
          linked="https://www.linkedin.com/in/kyle-loftin-62566639/"
          github="https://github.com/KALoftin"
        />
      </div>
      <div className="column">
        <PWA
          img={tiff}
          name="Tiffany Yang"
          description="-&quot;Have fun with problem solving&quot;"
          bkground="background"
          linked="https://www.linkedin.com/in/tiffany-yang-09b82937/"
          github="https://github.com/tyang1"
        />
      </div>
      <div className="column">
        <PWA
          img={jeff}
          name="Jeffrey Kang"
          description="-&quot;Enjoys fullstack!&quot;"
          bkground="background"
          linked="https://www.linkedin.com/in/jeff-r-kang/"
          github="https://github.com/jkang215"
        />
      </div>
    </ScrollAnimation>
  </div>
);

export default Team;
