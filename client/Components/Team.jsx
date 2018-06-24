import React from "react";
import PWA from "./PWA.jsx";
import chris from "../static/Chris.jpg";
import jeff from "../static/Jeff.jpg";
import kyle from "../static/Kyle.jpg";
import tiff from "../static/Tiffany.jpg";
import Info from './Info.jsx';
import "../animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Team = props => (
  <div className="container-fluid team">
<ScrollAnimation animateIn="fadeInRight">
    <div className="row heading">
      <h3>Our Team</h3>
    </div>
    <div className="column">
      <PWA img={chris} name="Christopher Washburn" description='-"Passionate about React/Redux"' bkground="background" linked = "https://www.linkedin.com/in/christopherwashburn/" github="https://github.com/SKChristopher"/>
    </div>
    <div className="column">
      <PWA img={kyle} name="Kyle Loftin" description='-"Love all things tech!"' bkground="ready to take on new tech" linked = "https://www.linkedin.com/in/kyle-loftin-62566639/" github="https://github.com/KALoftin"/>
    </div>
    <div className="column">
      <PWA img={tiff} name="Tiffany Yang" description='-"Have fun with problem solving"' bkground="background" linked = "https://www.linkedin.com/in/tiffany-yang-09b82937/" github="https://github.com/tyang1"/>
    </div>
    <div className="column">
      <PWA img={jeff} name="Jeffrey Kang" description='-"Enjoys fullstack!"' bkground="background" linked = "https://www.linkedin.com/in/jeff-r-kang/" github="https://github.com/jkang215"/>
    </div>
  </ScrollAnimation>
    {/* <div className="column">
      <PWA img={jeff} description="Jeff Kang" />
    <div className='team-hover'>
      <Info />
      </div>
    </div>

    <div className="column">
      <PWA img={kyle} description="Kyle" />
    <div className='team-hover'>
      <Info />
      </div>
    </div>

    <div className="column">
      <PWA img={tiff} description="Tiffany Yang" />
    <div className='team-hover'>
      <Info />
      </div>
    </div> */}
  </div>
);
export default Team;
