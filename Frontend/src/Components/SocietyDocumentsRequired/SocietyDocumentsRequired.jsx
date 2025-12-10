import React from "react";
import "./SocietyDocumentsRequired.css";

const documents = [
  {
    title: "Memorandum of Association (MOA)",
    text: "Duly signed by all founding members."
  },
  {
    title: "Rules and Regulations",
    text: "Signed by the founding members, outlining how the society will operate."
  },
  {
    title: "Identity Proof of All Members",
    text: "Aadhaar Card, PAN Card, Voter ID, Passport, or Driving License."
  },
  {
    title: "Address Proof of All Members",
    text: "Recent utility bill, Aadhaar Card, or bank statement."
  },
  {
    title: "Passport-size Photos",
    text: "Recent passport-sized photographs of all members."
  },
  {
    title: "Registered Office Address Proof",
    text: (
      <>
        Property deed, rent agreement, or <span className="highlight">NOC</span> from the landlord.
      </>
    )
  },
  {
    title: "Affidavit",
    text: "Affidavit from the President/Secretary stating willingness and eligibility."
  },
  {
    title: "Covering Letter",
    text: "Application letter addressed to the Registrar of Societies."
  },
  {
    title: "Minutes of First Meeting",
    text: "Includes decision to form society and appoint governing body."
  },
  {
    title: "Consent Letters",
    text: "Given by the members of the governing body."
  }
];

const DocumentsRequired = () => {
  return (
    <section className="docs-wrapper">
      <header className="docs-header">
        <h2>Documents Required for Society Registration</h2>
        <p>Here's a list of documents you need for Society Registration:</p>
      </header>

      <div className="docs-grid">
        {documents.map((doc, index) => (
          <div className="society-doc-card" key={index}>
            <h4 className="doc-title">{doc.title}</h4>
            <p className="doc-text">{doc.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsRequired;
