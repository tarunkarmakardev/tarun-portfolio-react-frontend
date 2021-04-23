import React from "react";

function Loader({ message }) {
  return (
    <div className="loader-container">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
}

export default Loader;
