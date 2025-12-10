import React from "react";
import "./TrustDocuments.css";

const documents = [
  "Original signed trust deed on the prescribed stamp paper",
  "Identity proof of settlor and trustees (Aadhaar, PAN, Voter ID, Passport, or Driving License)",
  "Address proof of settlor and trustees (Aadhaar, recent utility bill, or bank statement)",
  "PAN card application for the trust (to be obtained post-registration)",
  "Passport-size photographs of the settlor and trustees",
  "Registered office address proof (property title deed or lease agreement/NOC)",
  "Details of trust assets (list of movable and immovable properties)",
  "Digital Signature Certificates (DSC) for authorized signatories",
];

const DocumentsGridSection = () => {
  return (
    <section className="doc-section">
      <h2 className="doc-title">
        Key Documents Required for Trust Registration
      </h2>
      <p className="doc-intro">
        A list of documents you need to have for trust registration:
      </p>

      <div className="doc-grid">
        {documents.map((item, index) => (
          <div className="doc-card" key={index}>
            <span className="doc-bullet" />
            <p className="doc-text">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsGridSection;
