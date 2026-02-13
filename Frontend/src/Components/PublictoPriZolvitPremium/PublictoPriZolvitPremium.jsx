import React from "react";
import "./PublictoPriZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="plt-zp-section">
      <div className="plt-zp-container">
        <div className="plt-zp-card">

          {/* Left illustration */}
          <div className="plt-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="plt-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="plt-zp-content">

            {/* Title + subtitle */}
            <header className="plt-zp-header">
              <h2 className="plt-zp-title">
                Legal Terminus{" "}
                <span className="plt-zp-title-highlight">Priority</span>{" "}
                <span className="plt-zp-title-icon">⚖️</span>
              </h2>
              <p className="plt-zp-subtitle">
                Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="plt-zp-section-block">
              <h3 className="plt-zp-label">What You Get:</h3>
              <ul className="plt-zp-list plt-zp-features-list">
                <li className="plt-zp-list-item">
                  <span className="plt-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="plt-zp-list-item">
                  <span className="plt-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="plt-zp-list-item">
                  <span className="plt-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="plt-zp-section-block">
              <h3 className="plt-zp-label">Important Notes:</h3>
              <div className="plt-zp-note-box">
                <ul className="plt-zp-note-list">
                  <li className="plt-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="plt-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="plt-zp-cta-row">
              <button className="plt-zp-cta-btn">
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
