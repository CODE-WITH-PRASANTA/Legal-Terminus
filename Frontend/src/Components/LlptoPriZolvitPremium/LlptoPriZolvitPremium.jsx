import React from "react";
import "./LlptoPriZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="LLP-to-PLC-zp-section">
      <div className="LLP-to-PLC-zp-container">
        <div className="LLP-to-PLC-zp-card">

          {/* Left illustration */}
          <div className="LLP-to-PLC-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="LLP-to-PLC-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="LLP-to-PLC-zp-content">

            {/* Title + subtitle */}
            <header className="LLP-to-PLC-zp-header">
              <h2 className="LLP-to-PLC-zp-title">
                Legal Terminus{" "}
                <span className="LLP-to-PLC-zp-title-highlight">Priority</span>{" "}
                <span className="LLP-to-PLC-zp-title-icon">⚖️</span>
              </h2>
              <p className="LLP-to-PLC-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="LLP-to-PLC-zp-section-block">
              <h3 className="LLP-to-PLC-zp-label">What You Get:</h3>
              <ul className="LLP-to-PLC-zp-list LLP-to-PLC-zp-features-list">
                <li className="LLP-to-PLC-zp-list-item">
                  <span className="LLP-to-PLC-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="LLP-to-PLC-zp-list-item">
                  <span className="LLP-to-PLC-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="LLP-to-PLC-zp-list-item">
                  <span className="LLP-to-PLC-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="LLP-to-PLC-zp-section-block">
              <h3 className="LLP-to-PLC-zp-label">Important Notes:</h3>
              <div className="LLP-to-PLC-zp-note-box">
                <ul className="LLP-to-PLC-zp-note-list">
                  <li className="LLP-to-PLC-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="LLP-to-PLC-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="LLP-to-PLC-zp-cta-row">
              <button className="LLP-to-PLC-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="LLP-to-PLC-zp-pricing">
              <span className="LLP-to-PLC-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
