import React from "react";
import "./PartnershipLLPZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const PartnershipLLPZolvitPremium = () => {
  return (
    <section className="partnership-llp-zp-section">
      <div className="partnership-llp-zp-container">
        <div className="partnership-llp-zp-card">

          {/* Left illustration */}
          <div className="partnership-llp-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="partnership-llp-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="partnership-llp-zp-content">

            {/* Title + subtitle */}
            <header className="partnership-llp-zp-header">
              <h2 className="partnership-llp-zp-title">
                Legal Terminus{" "}
                <span className="partnership-llp-zp-title-highlight">Priority</span>{" "}
                <span className="partnership-llp-zp-title-icon">⚖️</span>
              </h2>
              <p className="partnership-llp-zp-subtitle">
                Get your company registered faster with Legal Terminus
                expert-handled process, made for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="partnership-llp-zp-section-block">
              <h3 className="partnership-llp-zp-label">What You Get:</h3>
              <ul className="partnership-llp-zp-list partnership-llp-zp-features-list">
                <li className="partnership-llp-zp-list-item">
                  <span className="partnership-llp-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus
                  expert-handled process, made for entrepreneurs who value
                  time and want to avoid unnecessary delays.
                </li>
                <li className="partnership-llp-zp-list-item">
                  <span className="partnership-llp-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="partnership-llp-zp-list-item">
                  <span className="partnership-llp-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="partnership-llp-zp-section-block">
              <h3 className="partnership-llp-zp-label">Important Notes:</h3>
              <div className="partnership-llp-zp-note-box">
                <ul className="partnership-llp-zp-note-list">
                  <li className="partnership-llp-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="partnership-llp-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="partnership-llp-zp-cta-row">
              <button className="partnership-llp-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipLLPZolvitPremium;
