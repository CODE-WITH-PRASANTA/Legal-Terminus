import React from "react";
import "./PritoPublicZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="prp-zp-section">
      <div className="prp-zp-container">
        <div className="prp-zp-card">

          {/* Left illustration */}
          <div className="prp-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="prp-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="prp-zp-content">

            {/* Title + subtitle */}
            <header className="prp-zp-header">
              <h2 className="prp-zp-title">
                Legal Terminus{" "}
                <span className="prp-zp-title-highlight">Priority</span>{" "}
                <span className="prp-zp-title-icon">⚖️</span>
              </h2>
              <p className="prp-zp-subtitle">
                Get your company registered faster with Legal Terminus
                expert-handled process, made for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="prp-zp-section-block">
              <h3 className="prp-zp-label">What You Get:</h3>
              <ul className="prp-zp-list prp-zp-features-list">
                <li className="prp-zp-list-item">
                  <span className="prp-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus
                  expert-handled process, made for entrepreneurs who value
                  time and want to avoid unnecessary delays.
                </li>
                <li className="prp-zp-list-item">
                  <span className="prp-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="prp-zp-list-item">
                  <span className="prp-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="prp-zp-section-block">
              <h3 className="prp-zp-label">Important Notes:</h3>
              <div className="prp-zp-note-box">
                <ul className="prp-zp-note-list">
                  <li className="prp-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="prp-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="prp-zp-cta-row">
              <button className="prp-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
