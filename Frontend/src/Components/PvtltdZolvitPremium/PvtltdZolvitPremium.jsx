import React from "react";
import "./PvtltdZolvitPremium.css";
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
              alt="Private Limited Company Registration by Legal Terminus"
              className="zp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="zp-content">

            {/* Title + subtitle */}
            <header className="zp-header">
              <h2 className="zp-title">
                Legal Terminus{" "}
                <span className="zp-title-highlight">Premium</span>{" "}
                <span className="zp-title-icon">⚖️</span>
              </h2>
              <p className="zp-subtitle">
                Designed for startups and growing businesses seeking a smooth,
                fast, and fully compliant Private Limited Company registration
                experience with expert legal support.
              </p>
            </header>

            {/* Features */}
            <section className="zp-section-block">
              <h3 className="zp-label">What You Get:</h3>
              <ul className="zp-list zp-features-list">
                <li className="zp-list-item">
                  <span className="zp-list-icon">🧑‍⚖️</span>
                  Dedicated legal expert for end-to-end guidance and accurate
                  documentation.
                </li>
                <li className="zp-list-item">
                  <span className="zp-list-icon">📑</span>
                  Complete application preparation and submission within{" "}
                  <strong>48 working hours.</strong>
                </li>
                <li className="zp-list-item">
                  <span className="zp-list-icon">⏱️</span>
                  Company incorporation typically completed within{" "}
                  <strong>5–7 working days</strong>, subject to MCA approvals.
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="zp-section-block">
              <h3 className="zp-label">Important Notes:</h3>
              <div className="zp-note-box">
                <ul className="zp-note-list">
                  <li className="zp-note-item">
                    We prioritize your preferred business name and conduct a
                    preliminary name check before submission.
                  </li>
                  <li className="zp-note-item">
                    In case of name rejection, our experts will recommend
                    legally compliant alternative names to ensure approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="zp-cta-row">
              <button className="zp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

            {/* Pricing */}
            <p className="zp-pricing">
              <span className="zp-label">Pricing:</span> Starts from{" "}
              <span className="zp-price-strong">₹50,000</span>. The package
              includes Private Limited Company incorporation, DIN & DSC
              assistance, PAN & TAN, and first-year compliance support such as
              auditor appointment and basic filings.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ZolvitPremium;
