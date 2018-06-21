import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import gitPic from '../images/github.jpg';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: [false, true, false, true],
    };
  }

  handleClick(id) {
    let { open } = this.state;
    this.setState({
      open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
    });
  }
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark navbar-expand-md bg-success justify-content-between">
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="navbar-collapse collapse dual-nav w-100" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              {/* <HamburgerMenu
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                isOpen={this.state.open[3]}
                menuClicked={this.handleClick.bind(this, 3)}
                width={23}
                height={20}
                strokeWidth={1}
                rotate={0}
                color="black"
                borderRadius={0}
                animationDuration={0.5}
              /> */}
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/">Download</a>
                <a className="dropdown-item" href="/">How to use</a>
                <a className="dropdown-item" href="/">Connect with The Forge</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-brand mx-auto d-block text-center w-100">The Forge</div>
        <div className="navbar-collapse collapse dual-nav w-100">
          <a className="navbar-brand nav navbar-nav ml-auto" href="https://github.com/ProgrammersWitAttitudes/pwa_creator">
            <img src={gitPic} width="40" height="30" alt="Github" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
