import React from "react";
import "./FoodLicenseZolvitPremium.css";
import premiumIllustration from "../../assets/lt-companys.svg";

const FoodLicenseZolvitPremium = () => {
  return (
    <section className="foodlicensezp-section">
      <div className="foodlicensezp-container">
        <div className="foodlicensezp-card">

          {/* Left illustration */}
          <div className="foodlicensezp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Food License Registration by Legal Terminus"
              className="foodlicensezp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="foodlicensezp-content">

            {/* Title + subtitle */}
            <header className="foodlicensezp-header">
              <h2 className="foodlicensezp-title">
                Legal Terminus{" "}
                <span className="foodlicensezp-title-highlight">Priority</span>{" "}
                <span className="foodlicensezp-title-icon">⚖️</span>
              </h2>
              <p className="foodlicensezp-subtitle">
                Get your FSSAI Food License registration completed faster with Legal Terminus’
                expert-handled process — designed for entrepreneurs who value
                time and want a seamless business setup.
              </p>
            </header>

            {/* Features */}
            <section className="foodlicensezp-section-block">
              <h3 className="foodlicensezp-label">What You Get:</h3>
              <ul className="foodlicensezp-list foodlicensezp-features-list">
                <li className="foodlicensezp-list-item">
                  <span className="foodlicensezp-list-icon">🧑‍⚖️</span>
                  End-to-end FSSAI registration handled by our legal experts to
                  ensure quick approval and zero rejection risk.
                </li>
                <li className="foodlicensezp-list-item">
                  <span className="foodlicensezp-list-icon">📑</span>
                  Hassle-Free Documentation and Online Application Filing
                </li>
                <li className="foodlicensezp-list-item">
                  <span className="foodlicensezp-list-icon">⏱️</span>
                  Fast Processing and Regular Status Updates
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="foodlicensezp-section-block">
              <h3 className="foodlicensezp-label">Important Notes:</h3>
              <div className="foodlicensezp-note-box">
                <ul className="foodlicensezp-note-list">
                  <li className="foodlicensezp-note-item">
                    We verify your documents thoroughly before submission to
                    prevent any FSSAI rejections or delays.
                  </li>
                  <li className="foodlicensezp-note-item">
                    If the FSSAI authority requests clarification, our experts handle
                    the communication on your behalf for smooth approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="foodlicensezp-cta-row">
              <button className="foodlicensezp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodLicenseZolvitPremium;
