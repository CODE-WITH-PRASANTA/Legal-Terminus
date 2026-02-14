import React from "react";
import "./ProFOPCZolvitPremium.css";
import premiumIllustration from "../../assets/lt-company.svg";

const ZolvitPremium = () => {
  return (
    <section className="profopc-zp-section">
      <div className="profopc-zp-container">
        <div className="profopc-zp-card">

          {/* Left illustration */}
          <div className="profopc-zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Private Limited Company Registration by Legal Terminus"
              className="profopc-zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="profopc-zp-content">

            {/* Title + subtitle */}
            <header className="profopc-zp-header">
              <h2 className="profopc-zp-title">
                Legal Terminus{" "}
                <span className="profopc-zp-title-highlight">Priority</span>{" "}
                <span className="profopc-zp-title-icon">⚖️</span>
              </h2>
              <p className="profopc-zp-subtitle">
                Upgrade your Sole Proprietorship into a One Person Company (OPC) with expert guidance — structured for entrepreneurs who want legal protection, credibility, and smooth compliance without stress.
              </p>
            </header>

            {/* Features */}
            <section className="profopc-zp-section-block">
              <h3 className="profopc-zp-label">What You Get:</h3>
              <ul className="profopc-zp-list profopc-zp-features-list">
                <li className="profopc-zp-list-item">
                  <span className="profopc-zp-list-icon">🧑‍⚖️</span>
                  From document preparation to MCA filing — our experts handle everything for a seamless transition.
                </li>
                <li className="profopc-zp-list-item">
                  <span className="profopc-zp-list-icon">📑</span>
                  We take care of ROC filings, DIN, DSC, PAN update, and incorporation formalities.
                </li>
                <li className="profopc-zp-list-item">
                  <span className="profopc-zp-list-icon">⏱️</span>
                  Quick turnaround with regular updates at every stage.
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="profopc-zp-section-block">
              <h3 className="profopc-zp-label">Important Notes:</h3>
              <div className="profopc-zp-note-box">
                <ul className="profopc-zp-note-list">
                  <li className="profopc-zp-note-item">
                    All proprietorship assets and liabilities will be transferred to OPC as per legal norms.
                  </li>
                  <li className="profopc-zp-note-item">
                    Director and shareholder will be the same person (single owner model).
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="profopc-zp-cta-row">
              <button className="profopc-zp-cta-btn">
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
