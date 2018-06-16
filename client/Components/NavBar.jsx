import React from 'react';
import git from '../images/github.svg';

const Navbar = () => {


  return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-md bg-success justify-content-between">
      <div className="navbar-collapse collapse dual-nav w-100" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/" />
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/">Download</a>
              <a className="dropdown-item" href="/">How to use</a>
              <a className="dropdown-item" href="/">Connect with The Forge</a>
            </div>
          </li>
        </ul>
      </div>
      <a href="/" className="navbar-brand mx-auto d-block text-center w-100">The Forge</a>
      <div className="navbar-collapse collapse dual-nav w-100">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link" href="/"><i className="fa fa-github" /></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
