import React, { Component } from "react";

export default class MenuButton extends Component {
  render() {
    const { OpenMobNavBar } = this.props;
    // console.log(this.props);
    return (
      <button
        className={`menu-button ${OpenMobNavBar ? "open" : ""}`}
        onClick={this.props.onClick}
      >
        <div className="menu-button-icon"></div>
      </button>
    );
  }
}
