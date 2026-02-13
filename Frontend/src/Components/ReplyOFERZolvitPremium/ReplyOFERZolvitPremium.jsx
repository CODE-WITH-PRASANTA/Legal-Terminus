import React from "react";
import "./ReplyOFERZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="Replyof-ER-zp-section">
      <div className="Replyof-ER-zp-container">
        <div className="Replyof-ER-zp-card">

          {/* Left illustration */}
          <div className="Replyof-ER-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="Replyof-ER-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="Replyof-ER-zp-content">

            {/* Title + subtitle */}
            <header className="Replyof-ER-zp-header">
              <h2 className="Replyof-ER-zp-title">
                Legal Terminus{" "}
                <span className="Replyof-ER-zp-title-highlight">Priority</span>{" "}
                <span className="Replyof-ER-zp-title-icon">⚖️</span>
              </h2>
              <p className="Replyof-ER-zp-subtitle">
Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="Replyof-ER-zp-section-block">
              <h3 className="Replyof-ER-zp-label">What You Get:</h3>
              <ul className="Replyof-ER-zp-list Replyof-ER-zp-features-list">
                <li className="Replyof-ER-zp-list-item">
                  <span className="Replyof-ER-zp-list-icon">🧑‍⚖️</span>
                  Get your company registered faster with Legal Terminus expert-handled process, made for entrepreneurs who value time and want to avoid unnecessary delays.
                </li>
                <li className="Replyof-ER-zp-list-item">
                  <span className="Replyof-ER-zp-list-icon">📑</span>
                  Hassle-Free Compliance Solutions
                </li>
                <li className="Replyof-ER-zp-list-item">
                  <span className="Replyof-ER-zp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="Replyof-ER-zp-section-block">
              <h3 className="Replyof-ER-zp-label">Important Notes:</h3>
              <div className="Replyof-ER-zp-note-box">
                <ul className="Replyof-ER-zp-note-list">
                  <li className="Replyof-ER-zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="Replyof-ER-zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="Replyof-ER-zp-cta-row">
              <button className="Replyof-ER-zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing
            <p className="Replyof-ER-zp-pricing">
              <span className="Replyof-ER-zp-label">Starts from ₹3,999 (excluding government fees)</span> for Private Limited Company Registration in India.{" "}The package includes name approval, incorporation, DIN for two directors, e-PAN, e-TAN, and bank account documents. Also covers auditor appointment documents, EPF and ESI registrations.
              </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
