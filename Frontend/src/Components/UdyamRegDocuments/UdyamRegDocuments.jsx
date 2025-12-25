import React from "react";
import "./UdyamRegDocuments.css"

const documents = [
  "Aadhaar linked with your mobile number",
  "PAN Card Number",
  "GST Registration (Optional)",
  "Business Details",
  "Investment & Turnover Information",
  "Sales and Purchase Bill Copies",
  "NIC Code",
];

const MsmeDocuments = () => {
  return (
    <section className="msme-docs-section">
      <div className="msme-docs-container">
        <h2 className="msme-docs-title">
          Documents Required for MSME Registration
        </h2>

        <p className="msme-docs-intro">
          To register your business under the MSME category, certain documents
          are necessary. These documents ensure a smooth and efficient
          registration process while enabling access to government benefits
          and MSME schemes.
        </p>

        <div className="msme-docs-grid">
          {documents.map((doc, index) => (
            <div className="msme-docs-card" key={index}>
              <span className="msme-docs-dot"></span>
              <p className="msme-docs-text">{doc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MsmeDocuments;
