import React from "react";
import PWA from "./PWA.jsx";
import chris from "../static/Chris.jpg";
import jeff from "../static/Jeff.jpg";
import kyle from "../static/Kyle.jpg";
import tiff from "../static/Tiffany.jpg";
import "../animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles.scss";

const Team = props => (
  <div className="container-fluid team" id="page-3">
    <div className="heading">
      <ScrollAnimation
        duration="1"
        delay="100"
        animateOnce="true"
        animateIn="fadeIn"
      >
        <h1>Our Team</h1>
      </ScrollAnimation>
    </div>
    <div className="column">
      <ScrollAnimation
        duration="1"
        delay="500"
        animateOnce="true"
        animateIn="fadeIn"
      >
        <PWA
          img={chris}
          name="Christopher Washburn"
          description="-&quot;Passionate about React/Redux&quot;"
          bkground="background"
          linked="https://www.linkedin.com/in/christopherwashburn/"
          github="https://github.com/SKChristopher"
          icon={<i className="fas fa-anchor float-left" />}
        />
      </ScrollAnimation>
    </div>
    <div className="column">
      <ScrollAnimation
        duration="1"
        delay="700"
        animateOnce="true"
        animateIn="fadeIn"
      >
        <PWA
          img={kyle}
          name="Kyle Loftin"
          description="-&quot;Love all things tech!&quot;"
          bkground="ready to take on new tech"
          linked="https://www.linkedin.com/in/kyle-loftin-62566639/"
          github="https://github.com/KALoftin"
          icon={[<i className="fas fa-crow float-left" />]}
        />
      </ScrollAnimation>
    </div>
    <div className="column">
      <ScrollAnimation
        duration="1"
        delay="900"
        animateOnce="true"
        animateIn="fadeIn"
      >
        <PWA
          img={tiff}
          name="Tiffany Yang"
          description="-&quot;Have fun with problem solving&quot;"
          bkground="background"
          linked="https://www.linkedin.com/in/tiffany-yang-09b82937/"
          github="https://github.com/tyang1"
          icon={[<i className="fas fa-bomb float-left" />]}
        />
      </ScrollAnimation>
    </div>
    <div className="column">
      <ScrollAnimation
        duration="1"
        delay="1100"
        animateOnce="true"
        animateIn="fadeIn"
      >
        <PWA
          img={jeff}
          name="Jeffrey Kang"
          description="-&quot;Enjoys fullstack!&quot;"
          bkground="background"
          linked="https://www.linkedin.com/in/jeff-r-kang/"
          github="https://github.com/jkang215"
          icon={[<i className="fas fa-wheelchair float-left" />]}
        />
      </ScrollAnimation>
    </div>
  </div>
);

export default Team;
