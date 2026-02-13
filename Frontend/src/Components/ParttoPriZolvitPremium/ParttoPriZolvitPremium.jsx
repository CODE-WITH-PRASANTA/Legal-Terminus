import React from "react";
import "./ParttoPriZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="Partnership-to-PLC-zp-section">
      <div className="Partnership-to-PLC-zp-container">
        <div className="Partnership-to-PLC-zp-card">

          {/* Left illustration */}
          <div className="Partnership-to-PLC-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="Partnership-to-PLC-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="Partnership-to-PLC-zp-content">

            {/* Title + subtitle */}
            <header className="Partnership-to-PLC-zp-header">
              <h2 className="Partnership-to-PLC-zp-title">
                Legal Terminus{" "}
                <span className="Partnership-to-PLC-zp-title-highlight">Priority</span>{" "}
                <span className="Partnership-to-PLC-zp-title-icon">⚖️</span>
              </h2>
              <p className="Partnership-to-PLC-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="Partnership-to-PLC-zp-section-block">
              <h3 className="Partnership-to-PLC-zp-label">What You Get:</h3>
              <ul className="Partnership-to-PLC-zp-list Partnership-to-PLC-zp-features-list">
                <li className="Partnership-to-PLC-zp-list-item">
                  <span className="Partnership-to-PLC-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="Partnership-to-PLC-zp-list-item">
                  <span className="Partnership-to-PLC-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="Partnership-to-PLC-zp-list-item">
                  <span className="Partnership-to-PLC-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="Partnership-to-PLC-zp-section-block">
              <h3 className="Partnership-to-PLC-zp-label">Important Notes:</h3>
              <div className="Partnership-to-PLC-zp-note-box">
                <ul className="Partnership-to-PLC-zp-note-list">
                  <li className="Partnership-to-PLC-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="Partnership-to-PLC-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="Partnership-to-PLC-zp-cta-row">
              <button className="Partnership-to-PLC-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="Partnership-to-PLC-zp-pricing">
              <span className="Partnership-to-PLC-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
