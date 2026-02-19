import React from "react";
import "./ChangeaddComZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ChangeaddComZolvitPremium= () => {
  return (
    <section className="Change-add-com-zp-section">
      <div className="Change-add-com-zp-container">
        <div className="Change-add-com-zp-card">

          {/* Left illustration */}
          <div className="Change-add-com-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="Change-add-com-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="Change-add-com-zp-content">

            {/* Title + subtitle */}
            <header className="Change-add-com-zp-header">
              <h2 className="Change-add-com-zp-title">
                Legal Terminus{" "}
                <span className="Change-add-com-zp-title-highlight">Priority</span>{" "}
                <span className="Change-add-com-zp-title-icon">⚖️</span>
              </h2>
              <p className="Change-add-com-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="Change-add-com-zp-section-block">
              <h3 className="Change-add-com-zp-label">What You Get:</h3>
              <ul className="Change-add-com-zp-list Change-add-com-zp-features-list">
                <li className="Change-add-com-zp-list-item">
                  <span className="Change-add-com-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="Change-add-com-zp-list-item">
                  <span className="Change-add-com-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="Change-add-com-zp-list-item">
                  <span className="Change-add-com-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="Change-add-com-zp-section-block">
              <h3 className="Change-add-com-zp-label">Important Notes:</h3>
              <div className="Change-add-com-zp-note-box">
                <ul className="Change-add-com-zp-note-list">
                  <li className="Change-add-com-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="Change-add-com-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="Change-add-com-zp-cta-row">
              <button className="Change-add-com-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="Change-add-com-zp-pricing">
              <span className="Change-add-com-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeaddComZolvitPremium;
