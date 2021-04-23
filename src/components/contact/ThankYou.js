import React from "react";
import Resume from "../resume/Resume";

export default function ThankYou() {
  return (
    <section className="thank-you">
      <div className="card-section">
        <div className="card">
          <h2>Your message was received!</h2>
          <Resume />
        </div>
      </div>
    </section>
  );
}
