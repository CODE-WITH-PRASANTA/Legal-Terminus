import React from "react";
import "./PartnershipLLPCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PartnershipLLPCompanyTab = () => {
  return (
    <div className="partnership-llp-companytab-wrapper">

      {/* ===========================
          SECTION 1 — OVERVIEW
      ============================ */}
      {/* <div className="partnership-llp-companytab-overview-wrapper">
        <h2 className="partnership-llp-companytab-overview-title">Understanding the Basics</h2>
        <p className="partnership-llp-companytab-overview-text">
          A Private Limited Company is a legally registered business under the Companies Act, 2013...
        </p>
      </div> */}

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="partnership-llp-companytab-intro-section">
        <div className="partnership-llp-companytab-intro-container">
          {/* Illustration */}
          <div className="partnership-llp-companytab-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="partnership-llp-companytab-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="partnership-llp-companytab-intro-content">
            <h2 className="partnership-llp-companytab-intro-title">
              Why Choose Private Limited Company Registration
            </h2>
            <p className="partnership-llp-companytab-intro-text">
              Registering a company in India is the first step to legally starting your business...
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="partnership-llp-companytab-act-section">
        <div className="partnership-llp-companytab-act-container">
          <div className="partnership-llp-companytab-act-card">
            <h3 className="partnership-llp-companytab-act-title">Companies Act, 2013</h3>

            <p className="partnership-llp-companytab-act-text">
              As per Section 2(68) of the Companies Act, 2013...
            </p>

            <p className="partnership-llp-companytab-act-point">
              <span className="partnership-llp-companytab-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="partnership-llp-companytab-act-point">
              <span className="partnership-llp-companytab-act-point-label">(b)</span>
              Limits the number of its members to 200;
            </p>

            <p className="partnership-llp-companytab-act-point">
              <span className="partnership-llp-companytab-act-point-label">(c)</span>
              Prohibits any invitation to the public to subscribe;
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PartnershipLLPCompanyTab;
