import React from "react";
import "./ProFOPCZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="profopc-zp-section">
      <div className="profopc-zp-container">
        <div className="profopc-zp-card">

          {/* Left illustration */}
          <div className="profopc-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="profopc-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="profopc-zp-content">

            {/* Title + subtitle */}
            <header className="profopc-zp-header">
              <h2 className="profopc-zp-title">
                Legal Terminus{" "}
                <span className="profopc-zp-title-highlight">Priority</span>{" "}
                <span className="profopc-zp-title-icon">⚖️</span>
              </h2>
              <p className="profopc-zp-subtitle">
                Get your company registered faster with Legal Terminus
                expert-handled process, made for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="profopc-zp-section-block">
              <h3 className="profopc-zp-label">What You Get:</h3>
              <ul className="profopc-zp-list profopc-zp-features-list">
                <li className="profopc-zp-list-item">
                  <span className="profopc-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus
                  expert-handled process, made for entrepreneurs who value
                  time and want to avoid unnecessary delays.
                </li>
                <li className="profopc-zp-list-item">
                  <span className="profopc-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="profopc-zp-list-item">
                  <span className="profopc-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="profopc-zp-section-block">
              <h3 className="profopc-zp-label">Important Notes:</h3>
              <div className="profopc-zp-note-box">
                <ul className="profopc-zp-note-list">
                  <li className="profopc-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="profopc-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="profopc-zp-cta-row">
              <button className="profopc-zp-cta-btn">
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
