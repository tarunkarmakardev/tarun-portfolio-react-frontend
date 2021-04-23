import React, { Component } from "react";

export default class ToggleThemeButton extends Component {
  toggleTheme = (e) => {
    e.target.checked
      ? document.body.classList.add("light")
      : document.body.classList.remove("light");
  };
  render() {
    const { option1, option2 } = this.props;
    return (
      <div className="toggle">
        {option1}
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-checkbox"
            onChange={this.toggleTheme}
          />
          <span className="toggle-slider"></span>
        </label>
        {option2}
      </div>
    );
  }
}
