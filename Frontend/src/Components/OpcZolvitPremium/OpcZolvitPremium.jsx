import React from "react";
import "./OpcZolvitPremium.css";
import premiumIllustration from "../../assets/lt-companys.svg";

const OpcZolvitPremium = () => {
  return (
    <section className="opczp-section">
      <div className="opczp-container">
        <div className="opczp-card">

          {/* Left illustration */}
          <div className="opczp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="opczp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="opczp-content">

            {/* Title + subtitle */}
            <header className="opczp-header">
              <h2 className="opczp-title">
                Legal Terminus{" "}
                <span className="opczp-title-highlight">Priority</span>{" "}
                <span className="opczp-title-icon">⚖️</span>
              </h2>
              <p className="opczp-subtitle">
                Get your OPC (One Person Company) registered faster with Legal Terminus’ expert-handled process—perfect for solo entrepreneurs who value time and want a smooth registration experience without delays.
              </p>
            </header>

            {/* Features */}
            <section className="opczp-section-block">
              <h3 className="opczp-label">What You Get:</h3>
              <ul className="opczp-list opczp-features-list">
                <li className="opczp-list-item">
                  <span className="opczp-list-icon">🧑‍⚖️</span>
                  Get your OPC incorporated quickly through our streamlined, expert-managed process.
                </li>
                <li className="opczp-list-item">
                  <span className="opczp-list-icon">📑</span>
                  Hassle-Free Compliance Assistance
                </li>
                <li className="opczp-list-item">
                  <span className="opczp-list-icon">⏱️</span>
                  Excellent Reminder Policy
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="opczp-section-block">
              <h3 className="opczp-label">Important Notes:</h3>
              <div className="opczp-note-box">
                <ul className="opczp-note-list">
                  <li className="opczp-note-item">
                    We prioritize your preferred OPC name and conduct a preliminary name availability check before submission.
                  </li>
                  <li className="opczp-note-item">
                    If your name gets rejected, our team suggests alternative compliant names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="opczp-cta-row">
              <button className="opczp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OpcZolvitPremium;
