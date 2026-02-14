import React from "react";
import "./TrademarktoOppositionOverview.css";
import tradeIllustration from "../../assets/whypvt-imp1.svg";

const TradeLicenseOverview = () => {
  return (
    <div className="tlo-wrapper">

      {/* ===========================
          SECTION 1 — INTRO
      ============================ */}
      <section className="tlo-intro-section">
        <div className="tlo-intro-container">

          <div className="tlo-intro-illustration-wrap">
            <img
              src={tradeIllustration}
              alt="Trade License illustration"
              className="tlo-intro-illustration"
            />
          </div>

          <div className="tlo-intro-content">
            <h2 className="tlo-intro-title">
              Why Choose Trade License Registration
            </h2>

            <p className="tlo-intro-text">
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
      <section className="tlo-act-section">
        <div className="tlo-act-container">
          <div className="tlo-act-card">
            <h3 className="tlo-act-title">Municipal Trade License Act</h3>

            <p className="tlo-act-text">
              As per the local municipal regulations, every business entity engaged in trade or
              commerce must obtain a valid Trade License before commencing operations.
            </p>

            <p className="tlo-act-point">
              <span className="tlo-act-point-label">(a)</span>
              Provides legal approval to operate within city limits under applicable laws;
            </p>

            <p className="tlo-act-point">
              <span className="tlo-act-point-label">(b)</span>
              Ensures business activities adhere to health, safety, and environmental standards; and
            </p>

            <p className="tlo-act-point">
              <span className="tlo-act-point-label">(c)</span>
              Protects public interest while promoting fair and ethical business practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradeLicenseOverview;
