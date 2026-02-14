import React from "react";
import "./ProFOPCCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="profopc-companytab-wrapper">

      {/* ===========================
          SECTION 1 — OVERVIEW
      ============================ */}
      {/* <div className="profopc-companytab-overview-wrapper">
        <h2 className="profopc-companytab-overview-title">Understanding the Basics</h2>
        <p className="profopc-companytab-overview-text">
          A Private Limited Company is a legally registered business under the Companies Act, 2013...
        </p>
      </div> */}

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="profopc-companytab-intro-section">
        <div className="profopc-companytab-intro-container">
          {/* Illustration */}
          <div className="profopc-companytab-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="profopc-companytab-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="profopc-companytab-intro-content">
            <h2 className="profopc-companytab-intro-title">
              Why Choose Conversion of Proprietorship into OPC Private Limited Company
            </h2>
            <p className="profopc-companytab-intro-text">
              A sole proprietorship firm is a popular business structure for most small and medium traders/manufacturers/ service providers. However, there is no requirement of registration of any such firm under the extant laws in force. Furthermore, there is no provision for compulsory audit of a sole proprietorship firm. Therefore, as it grows in size, it becomes the need of the hour for a business to evolve into a more trustworthy and transparent structure, such as OPC. It has been observed that such structures are preferred by critical stakeholders (investors, creditors, etc.). Hence, various sole proprietorship firms seek to convert to a corporate structure. ONE PERSON COMPANY is a preferable model for various sole proprietorship firms since it can be incorporated with merely one person as a shareholder.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="profopc-companytab-act-section">
        <div className="profopc-companytab-act-container">
          <div className="profopc-companytab-act-card">
            <h3 className="profopc-companytab-act-title">Companies Act, 2013</h3>

            <p className="profopc-companytab-act-text">
              As per Section 18 read with Section 3(1)(c) of the Companies Act, 2013, a sole proprietor is allowed to convert their proprietorship business into a One Person Company (OPC), provided all legal requirements are fulfilled.
            </p>

            <p className="profopc-companytab-act-point">
              <span className="profopc-companytab-act-point-label">(a)</span>
              The same individual must act as both shareholder and director of the OPC;
            </p>

            <p className="profopc-companytab-act-point">
              <span className="profopc-companytab-act-point-label">(b)</span>
              All assets, liabilities, and ongoing contracts of the proprietorship are transferred to the OPC;
            </p>

            <p className="profopc-companytab-act-point">
              <span className="profopc-companytab-act-point-label">(c)</span>
              The OPC must comply with incorporation norms, including nomination, DIN, DSC, and ROC filings.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
