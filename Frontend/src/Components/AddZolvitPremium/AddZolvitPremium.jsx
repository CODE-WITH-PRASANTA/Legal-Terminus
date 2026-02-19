import React from "react";
import "./AddZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const AddZolvitPremium = () => {
  return (
    <section className="Add-zp-section">
      <div className="Add-zp-container">
        <div className="Add-zp-card">

          {/* Left illustration */}
          <div className="Add-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="Add-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="Add-zp-content">

            {/* Title + subtitle */}
            <header className="Add-zp-header">
              <h2 className="Add-zp-title">
                Legal Terminus{" "}
                <span className="Add-zp-title-highlight">Priority</span>{" "}
                <span className="Add-zp-title-icon">⚖️</span>
              </h2>
              <p className="Add-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="Add-zp-section-block">
              <h3 className="Add-zp-label">What You Get:</h3>
              <ul className="Add-zp-list Add-zp-features-list">
                <li className="Add-zp-list-item">
                  <span className="Add-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="Add-zp-list-item">
                  <span className="Add-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="Add-zp-list-item">
                  <span className="Add-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="Add-zp-section-block">
              <h3 className="Add-zp-label">Important Notes:</h3>
              <div className="Add-zp-note-box">
                <ul className="Add-zp-note-list">
                  <li className="Add-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="Add-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="Add-zp-cta-row">
              <button className="Add-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="Add-zp-pricing">
              <span className="Add-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AddZolvitPremium;
