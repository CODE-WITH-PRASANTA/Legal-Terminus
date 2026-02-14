import React from "react";
import "./ProFPLCZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="profplc-zp-section">
      <div className="profplc-zp-container">
        <div className="profplc-zp-card">

          {/* Left illustration */}
          <div className="profplc-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="profplc-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="profplc-zp-content">

            {/* Title + subtitle */}
            <header className="profplc-zp-header">
              <h2 className="profplc-zp-title">
                Legal Terminus{" "}
                <span className="profplc-zp-title-highlight">Priority</span>{" "}
                <span className="profplc-zp-title-icon">⚖️</span>
              </h2>
              <p className="profplc-zp-subtitle">
                Upgrade your sole proprietorship into a Private Limited Company faster with our expert-handled process — designed for business owners who want credibility, scalability, and limited liability without unnecessary delays.
              </p>
            </header>

            {/* Features */}
            <section className="profplc-zp-section-block">
              <h3 className="profplc-zp-label">What You Get:</h3>
              <ul className="profplc-zp-list profplc-zp-features-list">
                <li className="profplc-zp-list-item">
                  <span className="profplc-zp-list-icon">🧑‍⚖️</span>
                  From document preparation to final incorporation, our experts manage the complete transition process smoothly.
                </li>
                <li className="profplc-zp-list-item">
                  <span className="profplc-zp-list-icon">📑</span>
                  We take care of ROC filings, MOA/AOA drafting, PAN, TAN, and other mandatory compliances.
                </li>
                <li className="profplc-zp-list-item">
                  <span className="profplc-zp-list-icon">⏱️</span>
                  Never miss a deadline — we proactively track timelines and keep you updated at every stage.
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="profplc-zp-section-block">
              <h3 className="profplc-zp-label">Important Notes:</h3>
              <div className="profplc-zp-note-box">
                <ul className="profplc-zp-note-list">
                  <li className="profplc-zp-note-item">
                    We verify your proposed company name in advance and conduct a preliminary availability check before submission.
                  </li>
                  <li className="profplc-zp-note-item">
                    If your preferred name is rejected, our experts suggest legally compliant alternatives to ensure faster approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="profplc-zp-cta-row">
              <button className="profplc-zp-cta-btn">
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
