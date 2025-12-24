import React from "react";
import "./HomeCertisfiedClient.css";
import HomeCertisfiedClientBg from "../../assets/cta_bg_2.webp";

const HomeCertisfiedClient = () => {
  return (
    <section className="hc-section">
      <div
        className="hc-wrapper"
        style={{ backgroundImage: `url(${HomeCertisfiedClientBg})` }}
      >
        {/* Decorative curves */}
        <span className="hc-curve hc-curve--left" />
        <span className="hc-curve hc-curve--right" />

        <div className="hc-content">
          <div className="hc-stat">
            <span className="hc-number">1K+</span>
            <span className="hc-label">Satisfied Clients</span>
          </div>

          <div className="hc-divider" />

          <div className="hc-stat">
            <span className="hc-number">120+</span>
            <span className="hc-label">Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCertisfiedClient;
