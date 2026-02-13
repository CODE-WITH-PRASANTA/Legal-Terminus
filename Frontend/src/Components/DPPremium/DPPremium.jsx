import React from "react";
import "./DPPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const DPPremium = () => {
  return (
    <section className="DP-premium-section">
      <div className="DP-premium-container">
        <div className="DP-premium-card">

          {/* Illustration */}
          <div className="DP-premium-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="DP-premium-illustration"
            />
          </div>

          {/* Content */}
          <div className="DP-premium-content">

            {/* Header */}
            <header className="DP-premium-header">
              <h2 className="DP-premium-title">
                Legal Terminus{" "}
                <span className="DP-premium-title-highlight">Priority</span>{" "}
                <span className="DP-premium-title-icon">⚖️</span>
              </h2>
              <p className="DP-premium-subtitle">
                Get your company registered faster with Legal Terminus’s
                expert-handled process, built for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="DP-premium-block">
              <h3 className="DP-premium-label">What You Get:</h3>
              <ul className="DP-premium-list">
                <li className="DP-premium-list-item">
                  <span className="DP-premium-list-icon">🧑‍⚖️</span>
                  Priority handling by Societyoration experts
                </li>
                <li className="DP-premium-list-item">
                  <span className="DP-premium-list-icon">📑</span>
                  Hassle-free compliance assistance
                </li>
                <li className="DP-premium-list-item">
                  <span className="DP-premium-list-icon">⏱️</span>
                  Strong follow-up & reminder policy
                </li>
              </ul>
            </section>

            {/* Notes */}
            <section className="DP-premium-block">
              <h3 className="DP-premium-label">Important Notes:</h3>
              <div className="DP-premium-note-box">
                <ul className="DP-premium-note-list">
                  <li className="DP-premium-note-item">
                    We prioritize your preferred business name and perform a
                    preliminary name check before submission.
                  </li>
                  <li className="DP-premium-note-item">
                    In case of name rejection, our experts suggest compliant
                    alternatives to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="DP-premium-cta-row">
              <button className="DP-premium-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DPPremium;
