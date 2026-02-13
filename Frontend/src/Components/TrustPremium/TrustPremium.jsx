import React from "react";
import "./TrustPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const TrustPremium = () => {
  return (
    <section className="trust-premium-section">
      <div className="trust-premium-container">
        <div className="trust-premium-card">

          {/* Illustration */}
          <div className="trust-premium-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="trust-premium-illustration"
            />
          </div>

          {/* Content */}
          <div className="trust-premium-content">

            {/* Header */}
            <header className="trust-premium-header">
              <h2 className="trust-premium-title">
                Legal Terminus{" "}
                <span className="trust-premium-title-highlight">Priority</span>{" "}
                <span className="trust-premium-title-icon">⚖️</span>
              </h2>
              <p className="trust-premium-subtitle">
                Get your company registered faster with Legal Terminus’s
                expert-handled process, built for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="trust-premium-block">
              <h3 className="trust-premium-label">What You Get:</h3>
              <ul className="trust-premium-list">
                <li className="trust-premium-list-item">
                  <span className="trust-premium-list-icon">🧑‍⚖️</span>
                  Priority handling by trustoration experts
                </li>
                <li className="trust-premium-list-item">
                  <span className="trust-premium-list-icon">📑</span>
                  Hassle-free compliance assistance
                </li>
                <li className="trust-premium-list-item">
                  <span className="trust-premium-list-icon">⏱️</span>
                  Strong follow-up & reminder policy
                </li>
              </ul>
            </section>

            {/* Notes */}
            <section className="trust-premium-block">
              <h3 className="trust-premium-label">Important Notes:</h3>
              <div className="trust-premium-note-box">
                <ul className="trust-premium-note-list">
                  <li className="trust-premium-note-item">
                    We prioritize your preferred business name and perform a
                    preliminary name check before submission.
                  </li>
                  <li className="trust-premium-note-item">
                    In case of name rejection, our experts suggest compliant
                    alternatives to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="trust-premium-cta-row">
              <button className="trust-premium-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPremium;
