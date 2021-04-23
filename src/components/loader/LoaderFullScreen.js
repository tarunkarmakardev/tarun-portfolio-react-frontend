import React from "react";
import Modal from "../modal/Modal";

export default function LoaderFullScreen({ message }) {
  return (
    <Modal displayModal={true}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <div className="message">{message}</div>
    </Modal>
  );
}
