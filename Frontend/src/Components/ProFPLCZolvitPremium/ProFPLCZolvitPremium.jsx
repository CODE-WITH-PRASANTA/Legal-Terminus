import React from "react";
import "./ProFPLCZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="profplc-zp-section">
      <div className="profplc-zp-container">
        <div className="profplc-zp-card">

          {/* Left illustration */}
          <div className="profplc-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="profplc-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="profplc-zp-content">

            {/* Title + subtitle */}
            <header className="profplc-zp-header">
              <h2 className="profplc-zp-title">
                Legal Terminus{" "}
                <span className="profplc-zp-title-highlight">Priority</span>{" "}
                <span className="profplc-zp-title-icon">⚖️</span>
              </h2>
              <p className="profplc-zp-subtitle">
                Get your company registered faster with Legal Terminus
                expert-handled process, made for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="profplc-zp-section-block">
              <h3 className="profplc-zp-label">What You Get:</h3>
              <ul className="profplc-zp-list profplc-zp-features-list">
                <li className="profplc-zp-list-item">
                  <span className="profplc-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus
                  expert-handled process, made for entrepreneurs who value
                  time and want to avoid unnecessary delays.
                </li>
                <li className="profplc-zp-list-item">
                  <span className="profplc-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="profplc-zp-list-item">
                  <span className="profplc-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="profplc-zp-section-block">
              <h3 className="profplc-zp-label">Important Notes:</h3>
              <div className="profplc-zp-note-box">
                <ul className="profplc-zp-note-list">
                  <li className="profplc-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="profplc-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="profplc-zp-cta-row">
              <button className="profplc-zp-cta-btn">
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
