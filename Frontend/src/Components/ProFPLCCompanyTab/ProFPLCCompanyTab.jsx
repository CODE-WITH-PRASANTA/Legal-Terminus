import React from "react";
import "./ProFPLCCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="profplc-companytab-wrapper">

      {/* ===========================
          SECTION 1 — OVERVIEW
      ============================ */}
      {/* <div className="profplc-companytab-overview-wrapper">
        <h2 className="profplc-companytab-overview-title">Understanding the Basics</h2>
        <p className="profplc-companytab-overview-text">
          A Private Limited Company is a legally registered business under the Companies Act, 2013...
        </p>
      </div> */}

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="profplc-companytab-intro-section">
        <div className="profplc-companytab-intro-container">
          {/* Illustration */}
          <div className="profplc-companytab-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="profplc-companytab-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="profplc-companytab-intro-content">
            <h2 className="profplc-companytab-intro-title">
              Why Choose Private Limited Company Registration
            </h2>
            <p className="profplc-companytab-intro-text">
              Registering a company in India is the first step to legally starting your business...
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="profplc-companytab-act-section">
        <div className="profplc-companytab-act-container">
          <div className="profplc-companytab-act-card">
            <h3 className="profplc-companytab-act-title">Companies Act, 2013</h3>

            <p className="profplc-companytab-act-text">
              As per Section 2(68) of the Companies Act, 2013...
            </p>

            <p className="profplc-companytab-act-point">
              <span className="profplc-companytab-act-point-label">(a)</span>
              Restricts the right to transfer its shares;
            </p>

            <p className="profplc-companytab-act-point">
              <span className="profplc-companytab-act-point-label">(b)</span>
              Limits the number of its members to 200;
            </p>

            <p className="profplc-companytab-act-point">
              <span className="profplc-companytab-act-point-label">(c)</span>
              Prohibits any invitation to the public to subscribe;
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
