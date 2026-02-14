import React from "react";
import "./ChangeLlpZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ChangeLlpZolvitPremium = () => {
  return (
    <section className="ChangeLlp-zp-section">
      <div className="ChangeLlp-zp-container">
        <div className="ChangeLlp-zp-card">

          {/* Left illustration */}
          <div className="ChangeLlp-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="ChangeLlp-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="ChangeLlp-zp-content">

            {/* Title + subtitle */}
            <header className="ChangeLlp-zp-header">
              <h2 className="ChangeLlp-zp-title">
                Legal Terminus{" "}
                <span className="ChangeLlp-zp-title-highlight">Priority</span>{" "}
                <span className="ChangeLlp-zp-title-icon">⚖️</span>
              </h2>
              <p className="ChangeLlp-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="ChangeLlp-zp-section-block">
              <h3 className="ChangeLlp-zp-label">What You Get:</h3>
              <ul className="ChangeLlp-zp-list ChangeLlp-zp-features-list">
                <li className="ChangeLlp-zp-list-item">
                  <span className="ChangeLlp-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="ChangeLlp-zp-list-item">
                  <span className="ChangeLlp-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="ChangeLlp-zp-list-item">
                  <span className="ChangeLlp-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="ChangeLlp-zp-section-block">
              <h3 className="ChangeLlp-zp-label">Important Notes:</h3>
              <div className="ChangeLlp-zp-note-box">
                <ul className="ChangeLlp-zp-note-list">
                  <li className="ChangeLlp-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="ChangeLlp-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="ChangeLlp-zp-cta-row">
              <button className="ChangeLlp-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="ChangeLlp-zp-pricing">
              <span className="ChangeLlp-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeLlpZolvitPremium;
