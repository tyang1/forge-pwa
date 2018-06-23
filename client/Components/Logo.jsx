import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 8.5em;
  text-align: center;
  color: orange;
`;

const Slogan = styled.h2`
  font-size: 1.5em;
  text-align: center;
  font-style: italic;
`;

const Logo = () => (
  <div>
    <Title>the Forge</Title>
    <Slogan>Where code is smithed.</Slogan>
    <div className="buttons float-right">
      <a href="https://github.com/ProgrammersWitAttitudes/pwa_creator" className="btn btn-success btn-lg">GITHUB</a>
      <a href="https://npmjs.com/package/the_forge" className="btn btn-info btn-lg">NPM</a>
    </div>
  </div>
);

export default Logo;
