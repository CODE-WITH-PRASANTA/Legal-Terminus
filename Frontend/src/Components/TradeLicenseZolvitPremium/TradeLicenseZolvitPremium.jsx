import React from "react";
import "./TradeLicenseZolvitPremium.css";
import premiumIllustration from "../../assets/lt-companys.svg";

const TradeLicenseZolvitPremium = () => {
  return (
    <section className="tradezp-section">
      <div className="tradezp-container">
        <div className="tradezp-card">

          {/* Left illustration */}
          <div className="tradezp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Trade License Registration by Legal Terminus"
              className="tradezp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="tradezp-content">

            {/* Title + subtitle */}
            <header className="tradezp-header">
              <h2 className="tradezp-title">
                Legal Terminus{" "}
                <span className="tradezp-title-highlight">Priority</span>{" "}
                <span className="tradezp-title-icon">⚖️</span>
              </h2>
              <p className="tradezp-subtitle">
                Get your trade license registered faster with Legal Terminus expert-handled process,
                made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="tradezp-section-block">
              <h3 className="tradezp-label">What You Get:</h3>
              <ul className="tradezp-list tradezp-features-list">
                <li className="tradezp-list-item">
                  <span className="tradezp-list-icon">🧑‍⚖️</span>
                  Get your trade license registered faster with Legal Terminus expert-handled process,
                  made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="tradezp-list-item">
                  <span className="tradezp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="tradezp-list-item">
                  <span className="tradezp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="tradezp-section-block">
              <h3 className="tradezp-label">Important Notes:</h3>
              <div className="tradezp-note-box">
                <ul className="tradezp-note-list">
                  <li className="tradezp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="tradezp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="tradezp-cta-row">
              <button className="tradezp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseZolvitPremium;
