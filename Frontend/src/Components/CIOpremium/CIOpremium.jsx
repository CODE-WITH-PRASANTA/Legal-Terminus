import React from "react";
import "./CIOpremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="cp-section">
      <div className="cp-container">
        <div className="cp-card">

          {/* Left illustration */}
          <div className="cp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="cp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="cp-content">

            {/* Title + subtitle */}
            <header className="cp-header">
              <h2 className="cp-title">
                Legal Terminus{" "}
                <span className="cp-title-highlight">Priority</span>{" "}
                <span className="cp-title-icon">⚖️</span>
              </h2>
              <p className="cp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="cp-section-block">
              <h3 className="cp-label">What You Get:</h3>
              <ul className="cp-list cp-features-list">
                <li className="cp-list-item">
                  <span className="cp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="cp-list-item">
                  <span className="cp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="cp-list-item">
                  <span className="cp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="cp-section-block">
              <h3 className="cp-label">Important Notes:</h3>
              <div className="cp-note-box">
                <ul className="cp-note-list">
                  <li className="cp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="cp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="cp-cta-row">
              <button className="cp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="cp-pricing">
              <span className="cp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
