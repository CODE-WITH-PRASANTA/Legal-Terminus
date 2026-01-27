import React from "react";
import "./IECZolvitPremium.css";
import premiumIllustration from "../../assets/lt-companys.svg";

const IECZolvitPremium = () => {
  return (
    <section className="ieczp-section">
      <div className="ieczp-container">
        <div className="ieczp-card">

          {/* Left illustration */}
          <div className="ieczp-illustration-wrapper">
            <img
              src={premiumIllustration}
              alt="Import Export Code Registration by Legal Terminus"
              className="ieczp-illustration"
            />
          </div>

          {/* Right content */}
          <div className="ieczp-content">

            {/* Title + subtitle */}
            <header className="ieczp-header">
              <h2 className="ieczp-title">
                Legal Terminus{" "}
                <span className="ieczp-title-highlight">Priority</span>{" "}
                <span className="ieczp-title-icon">⚖️</span>
              </h2>
              <p className="ieczp-subtitle">
                Get your IEC registration completed faster with Legal Terminus’
                expert-handled process — designed for entrepreneurs who value
                time and want seamless import/export setup.
              </p>
            </header>

            {/* Features */}
            <section className="ieczp-section-block">
              <h3 className="ieczp-label">What You Get:</h3>
              <ul className="ieczp-list ieczp-features-list">
                <li className="ieczp-list-item">
                  <span className="ieczp-list-icon">🧑‍⚖️</span>
                  End-to-end IEC registration handled by our legal experts to
                  ensure quick approval and zero rejection risk.
                </li>
                <li className="ieczp-list-item">
                  <span className="ieczp-list-icon">📑</span>
                  Hassle-Free Documentation and DGFT Application Filing
                </li>
                <li className="ieczp-list-item">
                  <span className="ieczp-list-icon">⏱️</span>
                  Fast Processing and Regular Status Updates
                </li>
              </ul>
            </section>

            {/* Note */}
            <section className="ieczp-section-block">
              <h3 className="ieczp-label">Important Notes:</h3>
              <div className="ieczp-note-box">
                <ul className="ieczp-note-list">
                  <li className="ieczp-note-item">
                    We verify your documents thoroughly before submission to
                    prevent any DGFT rejections or delays.
                  </li>
                  <li className="ieczp-note-item">
                    If DGFT requests clarification, our experts handle the
                    communication on your behalf for smooth approval.
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <div className="ieczp-cta-row">
              <button className="ieczp-cta-btn">
                Consult a Legal Expert
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default IECZolvitPremium;
