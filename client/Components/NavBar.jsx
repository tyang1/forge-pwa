import React from 'react';

const Navbar = () =>
  (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/">Download</a>
              <a className="dropdown-item" href="/">How to use</a>
              <a className="dropdown-item" href="/">Connect with The Forge</a>
            </div>
          </li>
        </ul>
        <a href="/">
          <img src="../images/github.svg" width="30" height="30" alt="" />
        </a>
        <div id="brandName">
          <span className="navbar-brand justify-content-center mb-0 h1">The Forge</span>
        </div>
      </div>
    </nav>
  );

export default Navbar;
