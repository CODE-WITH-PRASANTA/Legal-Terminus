import React from "react";
import "./TradeLicenseOverview.css";
import tradeIllustration from "../../assets/whypvt-imp1.svg"; // Replace with your actual image if needed

const TradeLicenseOverview = () => {
  return (
    <div className="trade-full-wrapper">

      {/* ===========================
          SECTION 1 — INTRO
      ============================ */}
      <section className="trade-intro-section">
        <div className="trade-intro-container">
          {/* Illustration */}
          <div className="trade-intro-illustration-wrap">
            <img
              src={tradeIllustration}
              alt="Trade License illustration"
              className="trade-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="trade-intro-content">
            <h2 className="trade-intro-title">
              Why Choose Trade License Registration
            </h2>
            <p className="trade-intro-text">
              Registering for a trade license in India is the first step to legally starting your
              business. The local municipal corporation governs the process and ensures your
              business complies with health, safety, and legal standards. Once registered,
              your business gets official approval to operate legally within a specific area.
              <br /><br />
              Choosing the right type of Trade License is important, as it determines
              how your business can function within local laws and industry standards.
              Different trade license categories apply to different types of commercial,
              industrial, or professional activities. Proper registration ensures your
              business operations are lawful, helps avoid penalties, and builds strong
              trust and credibility in the market.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 2 — GOVERNING ACT
      ============================ */}
      <section className="trade-act-section">
        <div className="trade-act-container">
          <div className="trade-act-card">
            <h3 className="trade-act-title">Municipal Trade License Act</h3>

            <p className="trade-act-text">
              As per the local municipal regulations, every business entity engaged in trade or
              commerce must obtain a valid Trade License before commencing operations.
            </p>

            <p className="trade-act-point">
              <span className="trade-act-point-label">(a)</span>
              Provides legal approval to operate within city limits under applicable laws;
            </p>

            <p className="trade-act-point">
              <span className="trade-act-point-label">(b)</span>
              Ensures business activities adhere to health, safety, and environmental standards; and
            </p>

            <p className="trade-act-point">
              <span className="trade-act-point-label">(c)</span>
              Protects public interest while promoting fair and ethical business practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeLicenseOverview;
