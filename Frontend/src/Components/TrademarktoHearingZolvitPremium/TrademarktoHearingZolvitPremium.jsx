import React from "react";
import "./TrademarktoHearingZolvitPremium.css";
import premiumIllustration from "../../assets/lt-companys.svg";

const TradeLicenseZolvitPremium = () => {
  return (
    <section className="thzp-section">
      <div className="thzp-container">
        <div className="thzp-card">

          {/* Left illustration */}
          <div className="thzp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Trade License Registration by Legal Terminus"
              className="thzp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="thzp-content">

            {/* Title + subtitle */}
            <header className="thzp-header">
              <h2 className="thzp-title">
                Legal Terminus{" "}
                <span className="thzp-title-highlight">Priority</span>{" "}
                <span className="thzp-title-icon">⚖️</span>
              </h2>
              <p className="thzp-subtitle">
                Get your trade license registered faster with Legal Terminus expert-handled process,
                made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="thzp-section-block">
              <h3 className="thzp-label">What You Get:</h3>
              <ul className="thzp-list thzp-features-list">
                <li className="thzp-list-item">
                  <span className="thzp-list-icon">🧑‍⚖️</span>
                  Get your trade license registered faster with Legal Terminus expert-handled process,
                  made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="thzp-list-item">
                  <span className="thzp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="thzp-list-item">
                  <span className="thzp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="thzp-section-block">
              <h3 className="thzp-label">Important Notes:</h3>
              <div className="thzp-note-box">
                <ul className="thzp-note-list">
                  <li className="thzp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="thzp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="thzp-cta-row">
              <button className="thzp-cta-btn">
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
