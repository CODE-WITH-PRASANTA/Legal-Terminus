import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="NL-root">
      <div className="NL-box">
        <div className="NL-left">
          <h2 className="NL-title">Newsletter</h2>
          <p className="NL-subtitle">
            Transform your Business. Subscribe our Newsletter.
          </p>
        </div>

        <form className="NL-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="NL-input"
          />
          <button className="NL-btn">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
