import React from "react";
import "./EPFRegDocuments.css";
import documentsImg from "../../assets/img-1.webp"; // ✅ IMAGE IMPORT

const requiredDocs = [
  "PAN Card of Proprietors / Partners / Directors",
  "Aadhaar Card of Proprietors / Partners / Directors",
  "Business Address Proof (Utility Bills / Rent Agreement)",
  "Business Incorporation Certificate",
  "Applicant Details (Email, Address, Phone Number, ID Proof)",
  "Entity's Bank Account Statement or Cancelled Cheque",
  "Director's Digital Signature (For Online EPF Registration)"
];

const optionalDocs = [
  "Trust Deed (For Trusts)",
  "MoA and AoA (For Companies)",
  "Partnership Deed (For Partnerships / LLPs)",
  "Shop and Establishment Registration Certificate",
  "GST Registration"
];

const EPFDocumentsGrid = () => {
  return (
    <section className="epf-doc-section">
      <div className="epf-doc-grid">
        
        {/* Left Image */}
        <div className="epf-doc-image">
          <img src={documentsImg} alt="EPF Documents Required" />
        </div>

        {/* Right Content */}
        <div className="epf-doc-content">
          <h2 className="epf-doc-title">
            Documents Required for EPF Registration
          </h2>

          <p className="epf-doc-desc">
            Completing documentation is the most important step before applying
            for EPF registration.
          </p>

          <ul className="epf-doc-list">
            {requiredDocs.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>

          <h3 className="epf-doc-subtitle">
            Optional Documents for Employee PF Registration
          </h3>

          <ul className="epf-doc-list secondary">
            {optionalDocs.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>

          <div className="epf-doc-cta">
            <button>Request Your Expert Call</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPFDocumentsGrid;
