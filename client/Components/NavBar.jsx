import React from 'react';
// import styles from '../styles.scss';
// import styled from 'styled-components';
// import HamburgerIcon from 'react-icons/lib/md/menu';
// import VerticalIcon from 'react-icons/lib/md/more-vert';
// import HamburgerMenu from '../HamburgerMenu';


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: null,
      // open: [false, true, false, true],
    };
  }

  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }

  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }

  // handleClick(id) {
  //   const { open } = this.state;
  //   this.setState({
  //     open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)],
  //   });
  // }

  render() {
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    return (
      <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-success justify-content-between">
        <div class="collapse navbar-collapse dual-nav w-100" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>

              </div>
            </li>
          </ul>
        </div>
        <a class="navbar-brand mx-auto d-block text-center w-100" href="#">The Forge Logo Here</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse dual-nav w-100">
          <a class="navbar-brand nav navbar-nav ml-auto" href="https://github.com/ProgrammersWitAttitudes/pwa_creator/stargazers">
            <i class="fab fa-github fa-2x" />
          </a>
        </div>
      </nav>
    );
  }

  //         {/* <HamburgerMenu
  //           className="nav-link dropdown-toggle"
  //           id="navbarDropdownMenuLink"
  //           data-toggle="dropdown"
  //           aria-haspopup="true"
  //           aria-expanded="false"
  //           isOpen={this.state.open[3]}
  //           menuClicked={this.handleClick.bind(this, 3)}
  //           width={23}
  //           height={20}
  //           strokeWidth={1}
  //           rotate={0}
  //           color="black"
  //           borderRadius={0}
  //           animationDuration={0.5}
  //         /> */}
}


export default Navbar;
