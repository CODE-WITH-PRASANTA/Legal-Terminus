import React from "react";
import "./CIRpremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="xp-section">
      <div className="xp-container">
        <div className="xp-card">

          {/* Left illustration */}
          <div className="xp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="xp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="xp-content">

            {/* Title + subtitle */}
            <header className="xp-header">
              <h2 className="xp-title">
                Legal Terminus{" "}
                <span className="xp-title-highlight">Priority</span>{" "}
                <span className="xp-title-icon">⚖️</span>
              </h2>
              <p className="xp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="xp-section-block">
              <h3 className="xp-label">What You Get:</h3>
              <ul className="xp-list xp-features-list">
                <li className="xp-list-item">
                  <span className="xp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="xp-list-item">
                  <span className="xp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="xp-list-item">
                  <span className="xp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="xp-section-block">
              <h3 className="xp-label">Important Notes:</h3>
              <div className="xp-note-box">
                <ul className="xp-note-list">
                  <li className="xp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="xp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="xp-cta-row">
              <button className="xp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="xp-pricing">
              <span className="xp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
