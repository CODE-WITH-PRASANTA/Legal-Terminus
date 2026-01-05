import React from "react";
import "./GSTRegFeatures.css";
import roleImg from "../../assets/feature_img.webp";

const GstInfoSection = () => {
  return (
    <div className="GstInfoSection-wrapper">

      {/* ===== Section 1: Role of GST Certificate ===== */}
      <section className="GstInfoSection-section GstInfoSection-grid-two">
        <div className="GstInfoSection-image">
          <img src={roleImg} alt="Role of GST Registration Certificate" />
        </div>

        <div className="GstInfoSection-content">
          <h2>Role of GST Registration Certificate</h2>
          <p className="GstInfoSection-subtitle">
            The following are the crucial roles of the GST registration certificate:
          </p>

          <ul className="GstInfoSection-list">
            <li>Legally allows businesses to levy and collect GST from customers.</li>
            <li>Authenticates eligibility to claim GST input tax credits.</li>
            <li>Helps secure loans and financial assistance from institutions.</li>
            <li>Authorizes participation in government tenders.</li>
            <li>Builds trust, credibility, and goodwill with consumers.</li>
          </ul>
        </div>
      </section>

      {/* ===== Section 2: Common Mistakes ===== */}
      <section className="GstInfoSection-section">
        <h2>Common Mistakes to Avoid During GST Registration</h2>
        <p className="GstInfoSection-subtitle">
          Businesses should avoid the following errors to ensure compliance:
        </p>

        <ul className="GstInfoSection-list GstInfoSection-grid-list">
          <li><strong>Wrong Documentation:</strong> Incorrect invoices and records.</li>
          <li><strong>Inadequate GST Scheme Understanding:</strong> Misinterpretation of composition scheme.</li>
          <li><strong>Missing Return Deadlines:</strong> Delays lead to penalties.</li>
          <li><strong>Invoice Inaccuracies:</strong> Errors in GSTIN or tax calculations.</li>
          <li><strong>GSTR-2A / 3B Mismatch:</strong> Unreconciled purchase data.</li>
          <li><strong>Unverified GSTIN:</strong> Supplier GSTIN errors.</li>
          <li><strong>Ignoring GST Notices:</strong> Non-response to compliance alerts.</li>
        </ul>

        <button className="GstInfoSection-cta-btn">
          GST Apply Online
        </button>
      </section>

      {/* ===== Section 3: GSTIN Heading ===== */}
      <section className="GstInfoSection-center">
        <h2>GSTIN and its Significance for GST Registration</h2>
        <p className="GstInfoSection-subtitle">
          A comprehensive guide enumerating GSTIN and its importance:
        </p>
      </section>

      {/* ===== Section 4: GSTIN Cards ===== */}
      <section className="GstInfoSection-section GstInfoSection-grid-two">
        <div className="GstInfoSection-card GstInfoSection-light">
          <h3>Features of GSTIN Under GST Registration</h3>
          <ul>
            <li>GSTIN is a unique 15-digit alphanumeric identifier.</li>
            <li>Assigned to every registered taxpayer in India.</li>
            <li>Acts as a primary identity for GST compliance.</li>
            <li>Mandatory for business transactions and filings.</li>
          </ul>
        </div>

        <div className="GstInfoSection-card GstInfoSection-dark">
          <h3>Structure of GSTIN Under GST Registration</h3>
          <ul>
            <li>First 2 digits represent the State Code.</li>
            <li>Next 10 digits represent PAN.</li>
            <li>13th digit denotes entity code.</li>
            <li>14th digit is reserved for future use.</li>
            <li>15th digit is the checksum character.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default GstInfoSection;
