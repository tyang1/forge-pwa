import React from 'react';
import PWA from './PWA.jsx';
import chris from '../static/Chris.jpg';
import jeff from '../static/jeff.jpeg';
import kyle from '../static/kyle.jpeg';
import tiff from '../static/tiff.png';

const Team = props => (
  <div className="container">
    <div className="title">
      <h1> Our Team </h1>
    </div>
    <div className="column">
      <PWA img={chris} description="Christopher Washburn" />
    </div>
    <div className="column">
      <PWA img={jeff} description="Jeff Kang" />
    </div>
    <div className="column">
      <PWA img={kyle} description="Kyle" />
    </div>
    <div className="column">
      <PWA img={tiff} description="Tiffany Yang" />
    </div>
  </div>
);
export default Team;
