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
              Why Choose Import Export Code (IEC) Registration
            </h2>
            <p className="iec-intro-text">
              Obtaining an Import Export Code (IEC) is the first step toward expanding your
              business into international trade. The Directorate General of Foreign Trade (DGFT)
              under the Ministry of Commerce issues the IEC, making it mandatory for businesses
              involved in importing or exporting goods and services from India.
              <br /><br />
              IEC registration provides a unique identification for your business and
              enhances credibility with international buyers and suppliers. Having a valid IEC
              enables you to avail of government export incentives, access global markets,
              and operate your business without restrictions related to cross-border trade.
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
              As per DGFT regulations, every business entity that imports or exports goods or
              services must possess a valid Import Export Code (IEC).
            </p>

            <p className="iec-act-point">
              <span className="iec-act-point-label">(a)</span>
              Enables international business transactions legally recognized by the Government of India;
            </p>

            <p className="iec-act-point">
              <span className="iec-act-point-label">(b)</span>
              Simplifies trade compliance procedures for importers and exporters; and
            </p>

            <p className="iec-act-point">
              <span className="iec-act-point-label">(c)</span>
              Provides access to export promotion schemes and global trade opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IECOverview;
