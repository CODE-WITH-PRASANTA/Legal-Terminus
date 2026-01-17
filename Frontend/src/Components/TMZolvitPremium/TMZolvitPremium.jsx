import React from "react";
import "./TMZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="Tm-zp-section">
      <div className="Tm-zp-container">
        <div className="Tm-zp-card">

          {/* Left illustration */}
          <div className="Tm-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="Tm-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="Tm-zp-content">

            {/* Title + subtitle */}
            <header className="Tm-zp-header">
              <h2 className="Tm-zp-title">
                Legal Terminus{" "}
                <span className="Tm-zp-title-highlight">Priority</span>{" "}
                <span className="Tm-zp-title-icon">⚖️</span>
              </h2>
              <p className="Tm-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="Tm-zp-section-block">
              <h3 className="Tm-zp-label">What You Get:</h3>
              <ul className="Tm-zp-list Tm-zp-features-list">
                <li className="Tm-zp-list-item">
                  <span className="Tm-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="Tm-zp-list-item">
                  <span className="Tm-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="Tm-zp-list-item">
                  <span className="Tm-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="Tm-zp-section-block">
              <h3 className="Tm-zp-label">Important Notes:</h3>
              <div className="Tm-zp-note-box">
                <ul className="Tm-zp-note-list">
                  <li className="Tm-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="Tm-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="Tm-zp-cta-row">
              <button className="Tm-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="Tm-zp-pricing">
              <span className="Tm-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
