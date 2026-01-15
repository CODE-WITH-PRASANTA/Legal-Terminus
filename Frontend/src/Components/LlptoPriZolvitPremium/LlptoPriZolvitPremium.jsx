import React from "react";
import "./LlptoPriZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="llp-zp-section">
      <div className="llp-zp-container">
        <div className="llp-zp-card">

          {/* Left illustration */}
          <div className="llp-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="llp-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="llp-zp-content">

            {/* Title + subtitle */}
            <header className="llp-zp-header">
              <h2 className="llp-zp-title">
                Legal Terminus{" "}
                <span className="llp-zp-title-highlight">Priority</span>{" "}
                <span className="llp-zp-title-icon">⚖️</span>
              </h2>
              <p className="llp-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="llp-zp-section-block">
              <h3 className="llp-zp-label">What You Get:</h3>
              <ul className="llp-zp-list llp-zp-features-list">
                <li className="llp-zp-list-item">
                  <span className="llp-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="llp-zp-list-item">
                  <span className="llp-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="llp-zp-list-item">
                  <span className="llp-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="llp-zp-section-block">
              <h3 className="llp-zp-label">Important Notes:</h3>
              <div className="llp-zp-note-box">
                <ul className="llp-zp-note-list">
                  <li className="llp-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="llp-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="llp-zp-cta-row">
              <button className="llp-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="llp-zp-pricing">
              <span className="llp-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
