import React from "react";
import "./PvtltdZolvitPremium.css";

// Replace the import below with your real image path if needed
import premiumIllustration from "../../assets/f-1 img.webp";

const ZolvitPremium = () => {
  return (
    <section className="zp-section">
      <div className="zp-container">
        <div className="zp-card">
          {/* Left illustration */}
          <div className="zp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Incorporation illustration"
              className="zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="zp-content">
            {/* Title + subtitle */}
            <header className="zp-header">
              <h2 className="zp-title">
                Zolvit <span className="zp-title-highlight">Premium</span>{" "}
                <span className="zp-title-icon">💎</span>
              </h2>
              <p className="zp-subtitle">
                For new businesses or existing businesses planning to expand.
                Offers a fast and efficient incorporation process.
              </p>
            </header>

            {/* Features */}
            <section className="zp-section-block">
              <h3 className="zp-label">Features:</h3>
              <ul className="zp-list zp-features-list">
                <li className="zp-list-item">
                  <span className="zp-list-icon">👨‍💼</span>
                  Assistance with application preparation for accurate
                  paperwork.
                </li>
                <li className="zp-list-item">
                  <span className="zp-list-icon">📄</span>
                  Application submission completed{" "}
                  <strong>within 2 days.</strong>
                </li>
                <li className="zp-list-item">
                  <span className="zp-list-icon">🌀</span>
                  Company incorporation completed in just
                  5 days, subject to MCA portal availability.
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="zp-section-block">
              <h3 className="zp-label">Note:</h3>
              <div className="zp-note-box">
                <ul className="zp-note-list">
                  <li className="zp-note-item">
                    We will try to retain your existing business name, if
                    applicable.
                  </li>
                  <li className="zp-note-item">
                    Our experts can suggest alternative names if the preferred
                    name is denied.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA + pricing */}
            <div className="zp-cta-row">
              <button className="zp-cta-btn">
                Talk to Incorporation Expert
              </button>
            </div>

            <p className="zp-pricing">
              <span className="zp-label">Pricing:</span> Starting from{" "}
              <span className="zp-price-strong">₹50,000</span>, depending on
              business requirements. Includes first-year compliance, such as
              auditor appointment and annual filing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
