import React from "react";
import "./GSTRegFeatures.css";
import roleImg from "../../assets/feature_img.webp"; // ONLY IMAGE IMPORT

const GstInfoSection = () => {
  return (
    <div className="gst-wrapper">

      {/* ===== Section 1: Role of GST Certificate (WITH IMAGE) ===== */}
      <section className="gst-section grid-two">
        <div className="gst-image">
          <img src={roleImg} alt="Role of GST Registration Certificate" />
        </div>

        <div className="gst-content">
          <h2>Role of GST Registration Certificate</h2>
          <p className="subtitle">
            The following are the crucial roles of the GST registration certificate:
          </p>

          <ul className="gst-list">
            <li>Legally allows businesses to levy and collect GST from customers.</li>
            <li>Authenticates eligibility to claim GST input tax credits.</li>
            <li>Helps secure loans and financial assistance from institutions.</li>
            <li>Authorizes participation in government tenders.</li>
            <li>Builds trust, credibility, and goodwill with consumers.</li>
          </ul>
        </div>
      </section>

      {/* ===== Section 2: Common Mistakes (NO IMAGE) ===== */}
      <section className="gst-section">
        <h2>Common Mistakes to Avoid During GST Registration</h2>
        <p className="subtitle">
          Businesses should avoid the following errors to ensure compliance:
        </p>

        <ul className="gst-list grid-list">
          <li><strong>Wrong Documentation:</strong> Incorrect invoices and records.</li>
          <li><strong>Inadequate GST Scheme Understanding:</strong> Misinterpretation of composition scheme.</li>
          <li><strong>Missing Return Deadlines:</strong> Delays lead to penalties.</li>
          <li><strong>Invoice Inaccuracies:</strong> Errors in GSTIN or tax calculations.</li>
          <li><strong>GSTR-2A / 3B Mismatch:</strong> Unreconciled purchase data.</li>
          <li><strong>Unverified GSTIN:</strong> Supplier GSTIN errors.</li>
          <li><strong>Ignoring GST Notices:</strong> Non-response to compliance alerts.</li>
        </ul>

        <button className="cta-btn">GST Apply Online</button>
      </section>

      {/* ===== Section 3: GSTIN Heading ===== */}
      <section className="gst-center">
        <h2>GSTIN and its Significance for GST Registration</h2>
        <p className="subtitle">
          A comprehensive guide enumerating GSTIN and its importance:
        </p>
      </section>

      {/* ===== Section 4: GSTIN Cards ===== */}
      <section className="gst-section grid-two">
        <div className="gst-card light">
          <h3>Features of GSTIN Under GST Registration</h3>
          <ul>
            <li>GSTIN is a unique 15-digit alphanumeric identifier.</li>
            <li>Assigned to every registered taxpayer in India.</li>
            <li>Acts as a primary identity for GST compliance.</li>
            <li>Mandatory for business transactions and filings.</li>
          </ul>
        </div>

        <div className="gst-card dark">
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
