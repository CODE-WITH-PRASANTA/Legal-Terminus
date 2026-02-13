import React from "react";
import "./Section8Premium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const Section8Premium = () => {
  return (
    <section className="s8-premium-section">
      <div className="s8-premium-container">
        <div className="s8-premium-card">

          {/* Illustration */}
          <div className="s8-premium-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="s8-premium-illustration"
            />
          </div>

          {/* Content */}
          <div className="s8-premium-content">

            {/* Header */}
            <header className="s8-premium-header">
              <h2 className="s8-premium-title">
                Legal Terminus{" "}
                <span className="s8-premium-title-highlight">Priority</span>{" "}
                <span className="s8-premium-title-icon">⚖️</span>
              </h2>
              <p className="s8-premium-subtitle">
                Get your company registered faster with Legal Terminus’s
                expert-handled process, built for entrepreneurs who value time
                and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="s8-premium-block">
              <h3 className="s8-premium-label">What You Get:</h3>
              <ul className="s8-premium-list">
                <li className="s8-premium-list-item">
                  <span className="s8-premium-list-icon">🧑‍⚖️</span>
                  Priority handling by incorporation experts
                </li>
                <li className="s8-premium-list-item">
                  <span className="s8-premium-list-icon">📑</span>
                  Hassle-free compliance assistance
                </li>
                <li className="s8-premium-list-item">
                  <span className="s8-premium-list-icon">⏱️</span>
                  Strong follow-up & reminder policy
                </li>
              </ul>
            </section>

            {/* Notes */}
            <section className="s8-premium-block">
              <h3 className="s8-premium-label">Important Notes:</h3>
              <div className="s8-premium-note-box">
                <ul className="s8-premium-note-list">
                  <li className="s8-premium-note-item">
                    We prioritize your preferred business name and perform a
                    preliminary name check before submission.
                  </li>
                  <li className="s8-premium-note-item">
                    In case of name rejection, our experts suggest compliant
                    alternatives to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="s8-premium-cta-row">
              <button className="s8-premium-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8Premium;
