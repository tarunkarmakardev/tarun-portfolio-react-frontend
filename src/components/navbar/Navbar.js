import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MenuButton from "./MenuButton";
import ToggleButton from "./ToggleThemeButton";

const links = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Me",
    path: "/about",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Contact Me",
    path: "/contact",
  },
];

export default class Navbar extends Component {
  state = {
    OpenMobNavBar: false,
  };
  renderLinks = () => {
    return links.map(({ id, title, path }) => {
      return (
        <li key={id}>
          <NavLink exact to={path} onClick={this.toggelMobNavBar}>
            {title}
          </NavLink>
        </li>
      );
    });
  };
  toggelMobNavBar = () => {
    this.setState({ OpenMobNavBar: !this.state.OpenMobNavBar });
  };
  render() {
    const { OpenMobNavBar } = this.state;
    return (
      <header>
        <nav className={`${OpenMobNavBar ? "open" : ""}`}>
          <div className="brand">TK</div>
          <div>
            <ul>
              {this.renderLinks()}
              <li key="toggle">
                <ToggleButton option1={"Dark"} option2={"Light"} />
              </li>
            </ul>
          </div>
          <MenuButton
            OpenMobNavBar={OpenMobNavBar}
            onClick={this.toggelMobNavBar}
          />
        </nav>
      </header>
    );
  }
}
