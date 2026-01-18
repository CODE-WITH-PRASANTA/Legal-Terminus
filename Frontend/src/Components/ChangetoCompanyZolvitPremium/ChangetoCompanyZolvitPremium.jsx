import React from "react";
import "./ChangetoCompanyZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="czp-section">
      <div className="czp-container">
        <div className="czp-card">

          {/* Left illustration */}
          <div className="czp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="czp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="czp-content">

            {/* Title + subtitle */}
            <header className="czp-header">
              <h2 className="czp-title">
                Legal Terminus{" "}
                <span className="czp-title-highlight">Priority</span>{" "}
                <span className="czp-title-icon">⚖️</span>
              </h2>
              <p className="czp-subtitle">
                Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="czp-section-block">
              <h3 className="czp-label">What You Get:</h3>
              <ul className="czp-list czp-features-list">
                <li className="czp-list-item">
                  <span className="czp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="czp-list-item">
                  <span className="czp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="czp-list-item">
                  <span className="czp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Notes */}
            <section className="czp-section-block">
              <h3 className="czp-label">Important Notes:</h3>
              <div className="czp-note-box">
                <ul className="czp-note-list">
                  <li className="czp-note-item">
                    We prioritize your preferred business name and conduct a preliminary name check before submission.
                  </li>
                  <li className="czp-note-item">
                    In case of name rejection, our experts will recommend legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="czp-cta-row">
              <button className="czp-cta-btn">
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
