import React from "react";
import "./OPCDocuments.css";
import opcDocumentsImg from "../../assets/p-2 img.webp";

const documents = [
  {
    title: "Director’s PAN Card",
    desc: "Copy of the sole shareholder and nominee director's PAN card",
  },
  {
    title: "Identity Proof",
    desc: "Aadhaar card, Driving License, Voter ID, or Passport of the sole shareholder and nominee director",
  },
  {
    title: "Address Proof",
    desc: "Recent utility bills including water or electricity bill, mobile bill or bank statements",
  },
  {
    title: "Registered Office Address Proof",
    desc: "Rent agreement with NOC from the owner or utility bills in case of owned property",
  },
  {
    title: "Passport Size Photographs",
    desc: "Latest passport-sized photographs of the sole shareholder and nominee director",
  },
  {
    title: "MOA & AOA",
    desc: "Memorandum and Articles of Association defining business objectives and internal rules",
  },
];

const OPCDocuments = () => {
  return (
    <section className="opc-docs-section">
      <div className="opc-docs-container">
        {/* LEFT CONTENT */}
        <div className="opc-docs-content">
          <h2 className="opc-docs-title">
            OPC Registration Documents Required
          </h2>

          <p className="opc-docs-subtitle">
            Below is the list of documents to be submitted for OPC registration
            in India:
          </p>

          <div className="opc-docs-grid">
            {documents.map((item, index) => (
              <div className="opc-doc-card" key={index}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="opc-docs-image">
          <img src={opcDocumentsImg} alt="OPC Documents Illustration" />
        </div>
      </div>
    </section>
  );
};

export default OPCDocuments;
