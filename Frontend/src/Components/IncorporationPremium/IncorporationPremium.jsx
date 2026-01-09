import React from "react";
import "./IncorporationPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const IncorporationPremium = () => {
  return (
    <section className="incorp-premium-section">
      <div className="incorp-premium-container">
        <div className="incorp-premium-card">

          {/* Illustration */}
          <div className="incorp-premium-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="incorp-premium-illustration"
            />
          </div>

          {/* Content */}
          <div className="incorp-premium-content">

            {/* Header */}
            <header className="incorp-premium-header">
              <h2 className="incorp-premium-title">
                Legal Terminus{" "}
                <span className="incorp-premium-title-highlight">Priority</span>{" "}
                <span className="incorp-premium-title-icon">⚖️</span>
              </h2>
              <p className="incorp-premium-subtitle">
                Get your company registered faster with Legal Terminus’s
                expert-handled process, built for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="incorp-premium-block">
              <h3 className="incorp-premium-label">What You Get:</h3>
              <ul className="incorp-premium-list">
                <li className="incorp-premium-list-item">
                  <span className="incorp-premium-list-icon">🧑‍⚖️</span>
                  Priority handling by incorporation experts
                </li>
                <li className="incorp-premium-list-item">
                  <span className="incorp-premium-list-icon">📑</span>
                  Hassle-free compliance assistance
                </li>
                <li className="incorp-premium-list-item">
                  <span className="incorp-premium-list-icon">⏱️</span>
                  Strong follow-up & reminder policy
                </li>
              </ul>
            </section>

            {/* Notes */}
            <section className="incorp-premium-block">
              <h3 className="incorp-premium-label">Important Notes:</h3>
              <div className="incorp-premium-note-box">
                <ul className="incorp-premium-note-list">
                  <li className="incorp-premium-note-item">
                    We prioritize your preferred business name and perform a
                    preliminary name check before submission.
                  </li>
                  <li className="incorp-premium-note-item">
                    In case of name rejection, our experts suggest compliant
                    alternatives to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="incorp-premium-cta-row">
              <button className="incorp-premium-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IncorporationPremium;
