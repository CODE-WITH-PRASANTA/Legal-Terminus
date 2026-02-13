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
              Why Choose Conversion of Proprietorship into Private limited company
            </h2>
            <p className="profplc-companytab-intro-text">
              A sole proprietorship firm is a popular business structure for most small and medium traders/manufacturers/ service providers. However, there is no requirement of registration of any such firm under the extant laws in force. Furthermore, there is no provision for compulsory audit of a sole proprietorship firm. Therefore, as it grows in size, it becomes need of the hour for a business to evolve into a more trustworthy and transparent structure, such as Company. It has been observed that such structures are preferred by critical stakeholders (investors, creditors, etc.). Hence, various sole proprietorship firms seek to convert to a corporate structure.
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
              As per the Companies Act, 2013, a sole proprietorship can be converted into a Private Limited Company by incorporating a new company and transferring the existing business to it.
            </p>

            <p className="profplc-companytab-act-point">
              <span className="profplc-companytab-act-point-label">(a)</span>
              The business is transferred to the newly incorporated Private Limited Company along with assets and liabilities;
            </p>

            <p className="profplc-companytab-act-point">
              <span className="profplc-companytab-act-point-label">(b)</span>
              The proprietor becomes a shareholder/director of the company;
            </p>

            <p className="profplc-companytab-act-point">
              <span className="profplc-companytab-act-point-label">(c)</span>
              The company gains a separate legal identity with limited liability protection;
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
