import React from "react";
import "./IECOverview.css";
import iecIllustration from "../../assets/whypvt-imp1.svg"; // Replace with your actual image if needed

const IECOverview = () => {
  return (
    <div className="iec-full-wrapper">

      {/* ===========================
          SECTION 1 — INTRO
      ============================ */}
      <section className="iec-intro-section">
        <div className="iec-intro-container">
          {/* Illustration */}
          <div className="iec-intro-illustration-wrap">
            <img
              src={iecIllustration}
              alt="Import Export Code illustration"
              className="iec-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="iec-intro-content">
            <h2 className="iec-intro-title">
              Why Choose Importer Exporter Code Registration in India
            </h2>
            <p className="iec-intro-text">
              Every organization wishing to engage in the import-export of goods or services in India must obtain an Import Export Code (IEC). This code is issued by the Director General of Foreign Trade (DGFT). Below are some frequently asked questions related to importer exporter code registration:
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 2 — DGFT REGULATION
      ============================ */}
      <section className="iec-act-section">
        <div className="iec-act-container">
          <div className="iec-act-card">
            <h3 className="iec-act-title">DGFT and IEC Regulation</h3>

            <p className="iec-act-text">
              As per DGFT regulations, every business entity involved in importing or exporting goods or services is required to obtain a valid Import Export Code (IEC).
            </p>

            <p className="iec-act-point">
              <span className="iec-act-point-label">(a)</span>
              Enables businesses to carry out international trade legally under Government of India guidelines;
            </p>

            <p className="iec-act-point">
              <span className="iec-act-point-label">(b)</span>
              Simplifies import/export compliance procedures and documentation requirements; and
            </p>

            <p className="iec-act-point">
              <span className="iec-act-point-label">(c)</span>
              Helps businesses access export promotion benefits, incentives, and global trade opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IECOverview;
