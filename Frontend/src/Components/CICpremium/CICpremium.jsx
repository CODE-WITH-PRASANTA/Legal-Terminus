import React from "react";
import "./CICpremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="np-section">
      <div className="np-container">
        <div className="np-card">

          {/* Left illustration */}
          <div className="np-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="np-illustration"
            />
          </div>

          {/* Right content */}
          <div className="np-content">

            {/* Title + subtitle */}
            <header className="np-header">
              <h2 className="np-title">
                Legal Terminus{" "}
                <span className="np-title-highlight">Priority</span>{" "}
                <span className="np-title-icon">⚖️</span>
              </h2>
              <p className="np-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="np-section-block">
              <h3 className="np-label">What You Get:</h3>
              <ul className="np-list np-features-list">
                <li className="np-list-item">
                  <span className="np-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="np-list-item">
                  <span className="np-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="np-list-item">
                  <span className="np-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="np-section-block">
              <h3 className="np-label">Important Notes:</h3>
              <div className="np-note-box">
                <ul className="np-note-list">
                  <li className="np-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="np-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="np-cta-row">
              <button className="np-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="np-pricing">
              <span className="np-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
