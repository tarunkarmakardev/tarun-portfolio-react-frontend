import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Modal extends Component {
  render() {
    const { displayModal } = this.props;
    return ReactDOM.createPortal(
      <div
        className="modal"
        style={{ display: `${displayModal ? "block" : "none"}` }}
      >
        <div className="modal-content">{this.props.children}</div>
      </div>,
      document.getElementById("modal")
    );
  }
}
