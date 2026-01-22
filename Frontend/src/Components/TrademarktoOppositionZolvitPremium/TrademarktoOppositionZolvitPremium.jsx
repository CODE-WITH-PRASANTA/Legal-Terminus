import React from "react";
import "./TrademarktoOppositionZolvitPremium.css";
import premiumIllustration from "../../assets/lt-companys.svg";

const TradeLicenseZolvitPremium = () => {
  return (
    <section className="tlzp-section">
      <div className="tlzp-container">
        <div className="tlzp-card">

          {/* Left illustration */}
          <div className="tlzp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Trade License Registration by Legal Terminus"
              className="tlzp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="tlzp-content">

            {/* Title + subtitle */}
            <header className="tlzp-header">
              <h2 className="tlzp-title">
                Legal Terminus{" "}
                <span className="tlzp-title-highlight">Priority</span>{" "}
                <span className="tlzp-title-icon">⚖️</span>
              </h2>
              <p className="tlzp-subtitle">
                Get your trade license registered faster with Legal Terminus expert-handled process,
                made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="tlzp-section-block">
              <h3 className="tlzp-label">What You Get:</h3>
              <ul className="tlzp-list tlzp-features-list">
                <li className="tlzp-list-item">
                  <span className="tlzp-list-icon">🧑‍⚖️</span>
                  Get your trade license registered faster with Legal Terminus expert-handled process,
                  made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="tlzp-list-item">
                  <span className="tlzp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="tlzp-list-item">
                  <span className="tlzp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="tlzp-section-block">
              <h3 className="tlzp-label">Important Notes:</h3>
              <div className="tlzp-note-box">
                <ul className="tlzp-note-list">
                  <li className="tlzp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="tlzp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="tlzp-cta-row">
              <button className="tlzp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseZolvitPremium;
