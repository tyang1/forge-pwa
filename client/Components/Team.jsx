import React from "react";
import PWA from "./PWA.jsx";
import chris from "../static/Chris.jpg";
import jeff from "../static/Jeff.jpg";
import kyle from "../static/Kyle.jpg";
import tiff from "../static/Tiffany.jpg";
import Info from './Info.jsx';

const Team = props => (
  <div className="container-fluid">
    <div className="title">
      <h1> Our Team </h1>
    </div>
    <div className="column">
      <PWA img={chris} name="Christopher" description="Passionate about React/Redux" bkground="background" github="https://github.com/SKChristopher"/>
    </div>
    <div className="column">
      <PWA img={kyle} name="Kyle" description="Love all things tech!" bkground="ready to take on new tech" github="https://github.com/KALoftin"/>
    </div>
    <div className="column">
      <PWA img={tiff} name="Tiffany Yang" description="Have fun with problem solving" bkground="background" github="https://github.com/tyang1"/>
    </div>
    <div className="column">
      <PWA img={jeff} name="Jeffrey Kang" description="Enjoys fullstack!" bkground="background" github="https://github.com/jkang215"/>
    </div>
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
