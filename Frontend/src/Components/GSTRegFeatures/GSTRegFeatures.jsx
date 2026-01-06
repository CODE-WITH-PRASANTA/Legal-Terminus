import React from "react";
import "./GSTRegFeatures.css";
import roleImg from "../../assets/feature_img.webp";
import { FaCheckCircle } from "react-icons/fa";

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
            <li><FaCheckCircle /> Legally allows businesses to levy and collect GST from customers.</li>
            <li><FaCheckCircle /> Authenticates eligibility to claim GST input tax credits.</li>
            <li><FaCheckCircle /> Helps secure loans and financial assistance from institutions.</li>
            <li><FaCheckCircle /> Authorizes participation in government tenders.</li>
            <li><FaCheckCircle /> Builds trust, credibility, and goodwill with consumers.</li>
          </ul>
        </div>
      </section>

      {/* ===== Section 2: Common Mistakes (PREMIUM HEX DESIGN) ===== */}
      <section className="GstInfoSection-section demo-heading">
        <h2>Common Mistakes to Avoid During GST Registration</h2>
        <p className="GstInfoSection-subtitle">
          Businesses should avoid the following errors to ensure compliance:
        </p>

        <div className="GstHexContainer">
          <div className="GstHex hex-01">
            <span>01</span>
            <h4>Wrong Documentation</h4>
            <p>Incorrect invoices and improper records.</p>
          </div>

          <div className="GstHex hex-02">
            <span>02</span>
            <h4>Scheme Misunderstanding</h4>
            <p>Misinterpretation of GST composition scheme.</p>
          </div>

          <div className="GstHex hex-03">
            <span>03</span>
            <h4>Missing Return Deadlines</h4>
            <p>Delays lead to penalties.</p>
          </div>

          <div className="GstHex hex-center">
            <h3>GST</h3>
            <small>Registration</small>
          </div>

          <div className="GstHex hex-04">
            <span>04</span>
            <h4>Invoice Inaccuracies</h4>
            <p>Errors in GSTIN or tax calculations.</p>
          </div>

          <div className="GstHex hex-05">
            <span>05</span>
            <h4>GSTR-2A / 3B Mismatch</h4>
            <p>Unreconciled purchase data.</p>
          </div>

          <div className="GstHex hex-06">
            <span>06</span>
            <h4>Unverified GSTIN</h4>
            <p>Supplier GSTIN errors.</p>
          </div>
        </div>

       
      </section>

      {/* ===== Section 3: GSTIN Heading ===== */}
      <section className="GstInfoSection-center demo-heading">
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
            <li><FaCheckCircle /> GSTIN is a unique 15-digit alphanumeric identifier.</li>
            <li><FaCheckCircle /> Assigned to every registered taxpayer in India.</li>
            <li><FaCheckCircle /> Acts as a primary identity for GST compliance.</li>
            <li><FaCheckCircle /> Mandatory for business transactions and filings.</li>
          </ul>
        </div>

        <div className="GstInfoSection-card GstInfoSection-dark">
          <h3>Structure of GSTIN Under GST Registration</h3>
          <ul>
            <li><FaCheckCircle /> First 2 digits represent the State Code.</li>
            <li><FaCheckCircle /> Next 10 digits represent PAN.</li>
            <li><FaCheckCircle /> 13th digit denotes entity code.</li>
            <li><FaCheckCircle /> 14th digit is reserved for future use.</li>
            <li><FaCheckCircle /> 15th digit is the checksum character.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default GstInfoSection;
